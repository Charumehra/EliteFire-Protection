import { Request, Response, NextFunction } from 'express';
import { inquirySchema } from '../schemas/inquirySchema.js';
import { Inquiry } from '../models/Inquiry.js';
import { getDatabaseStatus, inMemoryInquiries } from '../config/db.js';
import { sendLeadNotification } from '../config/mailer.js';
import { logger } from '../utils/logger.js';

export async function createInquiry(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // 1. Validate payload with Zod
    const validationResult = inquirySchema.safeParse(req.body);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));

      res.status(400).json({
        success: false,
        message: 'Validation failed. Please correct the highlighted errors.',
        errors: formattedErrors,
      });
      return;
    }

    const data = validationResult.data;

    // 2. Honeypot spam protection: bots fill hidden inputs
    if (data.website_hp && data.website_hp.trim().length > 0) {
      logger.warn(`Spam bot caught via honeypot field from IP: ${req.ip}`);
      // Return 200 to fool the bot without persisting
      res.status(200).json({
        success: true,
        message: 'Inquiry received.',
      });
      return;
    }

    // 3. Extract metadata
    const ipAddress = req.ip || req.socket.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    let leadId = '';
    let emailSent = false;

    const dbStatus = getDatabaseStatus();

    // 4. Persistence
    if (dbStatus.isConnected) {
      const newLead = new Inquiry({
        name: data.name,
        companyName: data.companyName,
        phone: data.phone,
        email: data.email,
        service: data.service,
        location: data.location,
        message: data.message,
        preferredContactMethod: data.preferredContactMethod,
        ipAddress,
        userAgent,
        status: 'new',
        emailNotificationSent: false,
      });

      const saved = await newLead.save();
      leadId = saved._id.toString();

      // Dispatch notification
      emailSent = await sendLeadNotification({
        leadId,
        name: data.name,
        companyName: data.companyName,
        phone: data.phone,
        email: data.email,
        service: data.service,
        location: data.location,
        message: data.message,
        preferredContactMethod: data.preferredContactMethod,
        createdAt: saved.createdAt,
      });

      if (emailSent) {
        await Inquiry.findByIdAndUpdate(leadId, { emailNotificationSent: true });
      }
    } else {
      // In-Memory Fallback for development/offline testing
      leadId = 'lead_' + Date.now();
      const mockLead = {
        _id: leadId,
        ...data,
        status: 'new',
        notes: [],
        ipAddress,
        userAgent,
        createdAt: new Date(),
        updatedAt: new Date(),
        emailNotificationSent: false,
      };

      inMemoryInquiries.unshift(mockLead);

      emailSent = await sendLeadNotification({
        leadId,
        name: data.name,
        companyName: data.companyName,
        phone: data.phone,
        email: data.email,
        service: data.service,
        location: data.location,
        message: data.message,
        preferredContactMethod: data.preferredContactMethod,
        createdAt: mockLead.createdAt,
      });

      mockLead.emailNotificationSent = emailSent;
      logger.info(`Lead saved in offline in-memory store: ${leadId}`);
    }

    // 5. Send reliable response to user
    res.status(201).json({
      success: true,
      message: 'Thank you! Your quote request has been received. Our fire safety team will contact you shortly.',
      leadId,
      preferredContact: data.preferredContactMethod,
    });
  } catch (error) {
    next(error);
  }
}
