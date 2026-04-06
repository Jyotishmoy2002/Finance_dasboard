import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/index.css";

import { AuthProvider } from "./context/AuthContext.jsx";
<div className="flex bg-gray-100 min-h-screen"></div>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);