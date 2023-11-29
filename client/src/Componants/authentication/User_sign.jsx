import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./user.scss";

function UserSign() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { fullName, email, password, phone };

    try {
      await axios.post("http://localhost:8080/user/register", data);
      clearFormFields();
      nav("/user/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const clearFormFields = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <div className="container_user">
      <form className="register" onSubmit={handleSubmit}>
        <h2 className="heading">Registration </h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

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

        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Register Now</button>

        <p>
          Already have an account?
          <Link id="toggle" to={"/user/login"}>
            Login now
          </Link>
        </p>
      </form>
    </div>
  );
}

export default UserSign;
