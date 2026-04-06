import dashboardService from "../services/dashboard.service.js";

class DashboardController {
    async getSummary(req, res, next) {
        try {
            const data = await dashboardService.getSummary();
            res.status(200).json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }
    async getCategoryBreakdown(req, res, next) {
        try {
            const data = await dashboardService.getCategoryBreakdown();
            res.status(200).json({ success: true, data });
        } catch (error) {
            next(error);
        }  
    }
    async getRecentTransactions(req, res, next) {
        try {
            const data = await dashboardService.getRecentTransactions();
            res.status(200).json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }
    async getTrends(req, res, next) {
        try {
            const data = await dashboardService.getTrends();
            res.status(200).json({ success: true, data });
        } catch (error) {
            next(error);
        } 
    }
}

export default new DashboardController();