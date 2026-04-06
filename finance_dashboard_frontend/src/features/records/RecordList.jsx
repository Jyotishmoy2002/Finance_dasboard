import { useEffect, useState } from "react";
import { recordService } from "./recordService";
import { formatCurrency, formatDate } from "../../utils";

const RecordList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await recordService.getRecords();
      setRecords(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Records</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-2">Amount</th>
              <th className="pb-2">Type</th>
              <th className="pb-2">Category</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {records.map((r) => (
              <tr
                key={r._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 font-medium">
                  {formatCurrency(r.amount)}
                </td>

                <td
                  className={`py-3 ${
                    r.type === "income"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {r.type}
                </td>

                <td className="py-3">{r.category}</td>

                <td className="py-3 text-gray-500">
                  {formatDate(r.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordList;