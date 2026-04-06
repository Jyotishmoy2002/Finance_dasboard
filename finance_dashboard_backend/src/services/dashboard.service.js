import recordRepository from "../repositories/record.repository.js";
class DashboardService {
    async getSummary() {
        const data = await recordRepository.aggregate([
            {
                $group: {
                    _id: "$type",
                    total: { $sum: "$amount" },
                }
            }
        ]);
        let income = 0;
        let expense = 0;
        data.forEach(item => {
            if (item._id === "income") {
                income = item.total;
            } else if (item._id === "expense") {
                expense = item.total;
            }
        });
        return { 
            totalIncome: income,
            totalExpense: expense,
            netBalance: income - expense
        };
    }
    async getCategoryBreakdown() {
        const data = await recordRepository.aggregate([
            {
                $group: {
                    _id: "$category",
                    total: { $sum: "$amount" }
                }
            }
        ]);
        return data;
    }
    async getRecentTransactions() {
        return await recordRepository.findAll({});
    }
    async getTrends() {
        return await recordRepository.aggregate([
            {
                $group: {
                    _id: { $month: "$date" },
                    total: { $sum: "$amount" }
                }
            },
            { $sort: { "_id": 1} }
        ]);
    }
}

export default new DashboardService();