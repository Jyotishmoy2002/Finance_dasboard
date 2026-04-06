import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";

const Sidebar = () => {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-700 text-gray-300"
    }`;

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-5">
      <h2 className="text-2xl font-bold text-white mb-8">💰 Finance</h2>

      <nav className="flex flex-col gap-3">
        <Link to={ROUTES.DASHBOARD} className={linkStyle(ROUTES.DASHBOARD)}>
          📊 Dashboard
        </Link>

        <Link to={ROUTES.RECORDS} className={linkStyle(ROUTES.RECORDS)}>
          💳 Records
        </Link>

        <Link to={ROUTES.USERS} className={linkStyle(ROUTES.USERS)}>
          👥 Users
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;