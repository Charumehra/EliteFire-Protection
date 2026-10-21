import { app } from './app.js';
import { connectDB } from './config/db.js';
import { ENV } from './config/env.js';
import { logger } from './utils/logger.js';

async function startServer() {
  try {
    // Attempt database connection (with graceful offline fallback)
    await connectDB();

    app.listen(ENV.PORT, () => {
      logger.info(`Elite Fire and Protection Backend running on port ${ENV.PORT} [${ENV.NODE_ENV}]`);
      logger.info(`Health check endpoint: http://localhost:${ENV.PORT}/api/health`);
    });
  } catch (error) {
    logger.error('Critical failure during server startup:', error);
    process.exit(1);
  }
}

startServer();
