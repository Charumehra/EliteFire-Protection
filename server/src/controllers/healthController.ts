import { Request, Response } from 'express';
import { getDatabaseStatus } from '../config/db.js';
import { ENV } from '../config/env.js';

export function getHealth(req: Request, res: Response): void {
  const dbStatus = getDatabaseStatus();

  res.status(200).json({
    status: 'ok',
    service: 'Elite Fire and Protection API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: ENV.NODE_ENV,
    database: {
      connected: dbStatus.isConnected,
      fallbackMode: dbStatus.isFallbackMode,
      readyState: dbStatus.readyState,
    },
    business: {
      phone: ENV.BUSINESS_PHONE,
      whatsapp: ENV.BUSINESS_WHATSAPP,
      email: ENV.BUSINESS_EMAIL,
    },
  });
}
