import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import api from "./api";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // check session on mount
  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    await api.post("/auth/logout");
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {user && <Link to="/dashboard">Dashboard</Link>}
        {user && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<h2>Welcome! Go to Login/Register</h2>} />
      </Routes>
    </div>
  );
}

export default App;
