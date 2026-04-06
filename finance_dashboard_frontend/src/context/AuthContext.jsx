import { createContext, useContext, useEffect, useState } from "react";
import { getToken, setToken, removeToken } from "../utils";
import { API_BASE_URL, API_ENDPOINTS } from "../constants";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = getToken();

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${API_BASE_URL}/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await res.json();

        if (data.success) {
          setUser(data.data);
        } else {
          removeToken();
        }
      } catch (error) {
        removeToken();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

 const login = async (email, password) => {
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message);
  }
  localStorage.setItem("token", data.data.token);

  setUser(data.data.user);
};

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};