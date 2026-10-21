import { Request, Response, NextFunction } from 'express';
import { Inquiry } from '../models/Inquiry.js';
import { getDatabaseStatus, inMemoryInquiries } from '../config/db.js';
import { ENV } from '../config/env.js';

export function verifyAdminAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers['x-admin-key'] || req.query.adminKey;

  if (!authHeader || authHeader !== ENV.ADMIN_API_KEY) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized access. Valid administrative API key is required.',
    });
    return;
  }
  next();
}

export async function getInquiries(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { status, service, search, limit = '50', page = '1' } = req.query;
    const dbStatus = getDatabaseStatus();

    const pageNum = parseInt(page as string, 10) || 1;
    const limitNum = parseInt(limit as string, 10) || 50;
    const skip = (pageNum - 1) * limitNum;

    if (dbStatus.isConnected) {
      const query: any = {};
      if (status && status !== 'all') query.status = status;
      if (service && service !== 'all') query.service = service;
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { phone: { $regex: search, $options: 'i' } },
          { companyName: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
        ];
      }

      const [inquiries, total] = await Promise.all([
        Inquiry.find(query).sort({ createdAt: -1 }).skip(skip).limit(limitNum).lean(),
        Inquiry.countDocuments(query),
      ]);

      res.status(200).json({
        success: true,
        data: inquiries,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
        storage: 'mongodb',
      });
    } else {
      // In-Memory Fallback
      let list = [...inMemoryInquiries];

      if (status && status !== 'all') {
        list = list.filter((i) => i.status === status);
      }
      if (service && service !== 'all') {
        list = list.filter((i) => i.service === service);
      }
      if (search) {
        const q = String(search).toLowerCase();
        list = list.filter(
          (i) =>
            i.name?.toLowerCase().includes(q) ||
            i.phone?.toLowerCase().includes(q) ||
            i.companyName?.toLowerCase().includes(q) ||
            i.location?.toLowerCase().includes(q)
        );
      }

      const total = list.length;
      const paginated = list.slice(skip, skip + limitNum);

      res.status(200).json({
        success: true,
        data: paginated,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
        storage: 'in-memory-fallback',
      });
    }
  } catch (error) {
    next(error);
  }
}

export async function updateInquiryStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const { status, note } = req.body;

    const validStatuses = ['new', 'contacted', 'quote_sent', 'converted', 'closed'];
    if (status && !validStatuses.includes(status)) {
      res.status(400).json({ success: false, message: 'Invalid lead status.' });
      return;
    }

    const dbStatus = getDatabaseStatus();

    if (dbStatus.isConnected) {
      const updateData: any = {};
      if (status) updateData.status = status;
      if (note) {
        updateData.$push = {
          notes: {
            note,
            author: 'Admin User',
            createdAt: new Date(),
          },
        };
      }

      const updated = await Inquiry.findByIdAndUpdate(id, updateData, { new: true });
      if (!updated) {
        res.status(404).json({ success: false, message: 'Lead not found.' });
        return;
      }

      res.status(200).json({ success: true, message: 'Lead updated successfully.', data: updated });
    } else {
      const index = inMemoryInquiries.findIndex((i) => i._id === id);
      if (index === -1) {
        res.status(404).json({ success: false, message: 'Lead not found in memory store.' });
        return;
      }

      if (status) inMemoryInquiries[index].status = status;
      if (note) {
        inMemoryInquiries[index].notes = inMemoryInquiries[index].notes || [];
        inMemoryInquiries[index].notes.push({
          note,
          author: 'Admin User',
          createdAt: new Date(),
        });
      }
      inMemoryInquiries[index].updatedAt = new Date();

      res.status(200).json({
        success: true,
        message: 'Lead updated in memory store.',
        data: inMemoryInquiries[index],
      });
    }
  } catch (error) {
    next(error);
  }
}
