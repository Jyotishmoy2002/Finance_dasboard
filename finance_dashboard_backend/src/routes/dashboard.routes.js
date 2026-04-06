import express from 'express';
import dashboardController from '../controllers/dashboard.controller.js';

const router = express.Router();

router.get('/summary', dashboardController.getSummary);
router.get('/category', dashboardController.getCategoryBreakdown);
router.get('/recent', dashboardController.getRecentTransactions);
router.get('/trends', dashboardController.getTrends);

export default router;