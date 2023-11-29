import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./user.scss";

function Admin() {
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { password: password, admin: admin };

    try {
      await axios.post("http://localhost:8080/admin/login", data);
      window.localStorage.setItem("admin", "admin");
      nav("/admin/dashboard");
    } catch (error) {
      console.error("Error:", error);
      setError("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
    clearFormFields();
  };

  const clearFormFields = () => {
    setAdmin("");
    setPassword("");
  };

  return (
    <div className="container_user">
      <form className="register" onSubmit={handleSubmit}>
        <h2 className="heading">Login</h2>

        <label htmlFor="admin">Username</label>
        <input
          type="text"
          id="admin"
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Admin;
