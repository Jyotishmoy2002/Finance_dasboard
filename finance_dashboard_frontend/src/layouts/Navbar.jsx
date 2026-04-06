import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-700">
        Welcome back 👋
      </h1>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">
          {user?.name}
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;