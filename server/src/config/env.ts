import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env
dotenv.config();

export const ENV = {
  PORT: parseInt(process.env.PORT || '5000', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',
  ALLOWED_ORIGINS: (process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://localhost:3000').split(','),
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/elite_fire_protection',
  ENABLE_OFFLINE_DB_FALLBACK: process.env.ENABLE_OFFLINE_DB_FALLBACK !== 'false',

  // Email settings
  EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'development_mock',
  SMTP_HOST: process.env.SMTP_HOST || 'smtp.ethereal.email',
  SMTP_PORT: parseInt(process.env.SMTP_PORT || '587', 10),
  SMTP_SECURE: process.env.SMTP_SECURE === 'true',
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASS: process.env.SMTP_PASS || '',
  MAIL_FROM: process.env.MAIL_FROM || 'Elite Fire and Protection <contact@elitefireandprotection.in>',
  MAIL_TO: process.env.MAIL_TO || 'contact@elitefireandprotection.in',

  // Fallback Business Contact
  BUSINESS_PHONE: process.env.BUSINESS_PHONE || '+91 98XXX XXXXX',
  BUSINESS_WHATSAPP: process.env.BUSINESS_WHATSAPP || '+919800000000',
  BUSINESS_EMAIL: process.env.BUSINESS_EMAIL || 'contact@elitefireandprotection.in',
  ADMIN_API_KEY: process.env.ADMIN_API_KEY || 'elite_admin_secret_key_demo_2026',
};
