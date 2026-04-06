import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Records from "../pages/Records";
import Users from "../pages/Users";

import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "../constants";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />

        {/* Protected Routes */}
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.RECORDS}
          element={
            <ProtectedRoute>
              <Records />
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.USERS}
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;