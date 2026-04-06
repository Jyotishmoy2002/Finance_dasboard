const SummaryCard = ({ title, value, color = "blue", icon }) => {
  const styles = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    red: "from-red-500 to-red-600"
  };

  return (
    <div
      className={`p-5 rounded-2xl text-white shadow-lg bg-gradient-to-r ${styles[color]} hover:scale-105 transition`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm opacity-80">{title}</p>
          <h2 className="text-2xl font-bold mt-1">{value}</h2>
        </div>

        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
};

export default SummaryCard;