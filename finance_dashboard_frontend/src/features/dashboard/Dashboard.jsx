import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils";
import { API_BASE_URL } from "../../constants";

const Dashboard = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_BASE_URL}/dashboard/summary`);
      const data = await res.json();
      setSummary(data.data);
    };

    fetchData();
  }, []);

  if (!summary) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <SummaryCard title="Income" value={formatCurrency(summary.totalIncome)} />
        <SummaryCard title="Expenses" value={formatCurrency(summary.totalExpenses)} />
        <SummaryCard title="Balance" value={formatCurrency(summary.netBalance)} />
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value }) => (
  <div className="p-4 bg-white shadow rounded-xl">
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default Dashboard;