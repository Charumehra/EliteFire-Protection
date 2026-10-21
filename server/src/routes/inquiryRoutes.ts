import { Router } from 'express';
import { createInquiry } from '../controllers/inquiryController.js';
import { inquiryLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// POST /api/inquiries - Submit a new fire safety quote request
router.post('/', inquiryLimiter, createInquiry);

export default router;
