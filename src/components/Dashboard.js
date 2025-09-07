import React, { useEffect, useState } from "react";
import api from "../api";

function Dashboard({ user }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/auth/dashboard")
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Error loading dashboard"));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p><strong>User:</strong> {user?.email}</p>
      <p>{message}</p>
    </div>
  );
}

export default Dashboard;
