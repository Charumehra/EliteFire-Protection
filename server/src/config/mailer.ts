import nodemailer from 'nodemailer';
import { ENV } from './env.js';
import { logger } from '../utils/logger.js';
import { generateLeadNotificationEmail, LeadEmailData } from '../utils/emailTemplates.js';

let transporter: nodemailer.Transporter | null = null;

export function getMailerTransporter(): nodemailer.Transporter | null {
  if (transporter) return transporter;

  if (ENV.EMAIL_SERVICE === 'smtp' && ENV.SMTP_USER && ENV.SMTP_PASS) {
    try {
      transporter = nodemailer.createTransport({
        host: ENV.SMTP_HOST,
        port: ENV.SMTP_PORT,
        secure: ENV.SMTP_SECURE,
        auth: {
          user: ENV.SMTP_USER,
          pass: ENV.SMTP_PASS,
        },
      });
      logger.info('SMTP Transporter initialized successfully');
    } catch (err: any) {
      logger.error('Failed to create SMTP transporter:', err);
    }
  }

  return transporter;
}

export async function sendLeadNotification(lead: LeadEmailData): Promise<boolean> {
  const mailContent = generateLeadNotificationEmail(lead);

  const activeTransporter = getMailerTransporter();

  if (activeTransporter) {
    try {
      const info = await activeTransporter.sendMail({
        from: ENV.MAIL_FROM,
        to: ENV.MAIL_TO,
        replyTo: lead.email || undefined,
        subject: mailContent.subject,
        text: mailContent.text,
        html: mailContent.html,
      });
      logger.info(`Lead notification email sent successfully: ${info.messageId}`);
      return true;
    } catch (err: any) {
      logger.error('Failed to dispatch lead notification email via SMTP:', err);
      // Do not throw; return false so the caller can record the status
      return false;
    }
  } else {
    // Development or Mock Mode: log email contents safely to console for verification
    logger.info('[MOCK EMAIL SERVICE] Email dispatched successfully in development mode:');
    console.log('----------------------------------------------------');
    console.log(`TO: ${ENV.MAIL_TO}`);
    console.log(`SUBJECT: ${mailContent.subject}`);
    console.log(`PROSPECT: ${lead.name} (${lead.phone})`);
    console.log(`SERVICE: ${lead.service} - ${lead.location}`);
    console.log('----------------------------------------------------');
    return true;
  }
}
