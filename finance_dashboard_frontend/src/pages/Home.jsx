import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Finance Dashboard</h1>

      <div className="flex gap-4">
        <Link to={ROUTES.LOGIN} className="px-4 py-2 bg-blue-600 text-white rounded">
          Login
        </Link>

        <Link to={ROUTES.REGISTER} className="px-4 py-2 bg-gray-300 rounded">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;