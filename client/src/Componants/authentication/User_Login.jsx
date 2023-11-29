import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./user.scss";

function UserLogin() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { fullName, email, password, phone };
    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        data
      );
      const token = response.data;
      window.localStorage.setItem("token", token);
      nav("/");
    } catch (error) {
      console.error("Error:", error);
    }
      clearFormFields();
  };

  const clearFormFields = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <div className="container_user">
      <form className="login" onSubmit={handleSubmit}>
        <h2 className="heading"> Login</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login Now</button>

        <p>
          Don't have an account yet?
          <Link id="toggle" to={"/user/register"}>
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
}

export default UserLogin;
