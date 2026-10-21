import mongoose from 'mongoose';
import { ENV } from './env.js';
import { logger } from '../utils/logger.js';

let isConnected = false;
let isFallbackMode = false;

// In-memory fallback store for offline development/testing
export const inMemoryInquiries: any[] = [];

export async function connectDB(): Promise<void> {
  if (isConnected) return;

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(ENV.MONGODB_URI, {
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 3000,
    });
    isConnected = true;
    isFallbackMode = false;
    logger.info('Connected successfully to MongoDB Atlas / Local MongoDB');
  } catch (err: any) {
    if (ENV.ENABLE_OFFLINE_DB_FALLBACK) {
      isFallbackMode = true;
      logger.warn(
        `MongoDB connection failed (${err.message}). Offline fallback storage is ENABLED. Leads will be captured in-memory for testing.`
      );
    } else {
      logger.error('Failed to connect to MongoDB and fallback mode is disabled:', err);
      throw err;
    }
  }
}

export function getDatabaseStatus() {
  return {
    isConnected: mongoose.connection.readyState === 1,
    isFallbackMode,
    readyState: mongoose.connection.readyState, // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  };
}
