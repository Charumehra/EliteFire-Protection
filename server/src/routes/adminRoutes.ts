import { Router } from 'express';
import { getInquiries, updateInquiryStatus, verifyAdminAuth } from '../controllers/adminController.js';

const router = Router();

// Protect all admin endpoints with API key authorization
router.use(verifyAdminAuth);

// GET /api/admin/inquiries - List all inquiries with filters
router.get('/inquiries', getInquiries);

// PATCH /api/admin/inquiries/:id - Update status and add notes
router.patch('/inquiries/:id', updateInquiryStatus);

export default router;
