import { NavLink, Link } from "react-router-dom";
import "./header.scss";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { FaUserCircle } from "react-icons/fa";

function Header({ setSearch }) {
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const userStyles = {
    fontWeight: "bold",
    background: "black",
    color: "white",
    marginRight: "10px",
  };
  const searchStyle = {
    width: "200px",
    height: "30px",
    border: "none",
    boxShadow: "#f4e1e1 0px 0px 2px 2px",
    marginRight: "50px",
    borderRadius: "17px",
    outline: "none",
    padding: "4px 10px",
    fontSize: "15px",
    fontWeight: "500",
    textTransform: "capitalize",
  };

  useEffect(() => {
    verifyLogin();
  }, []);

  function verifyLogin() {
    let localStorageToken = window.localStorage.getItem("token");

    if (localStorageToken) {
      const decoded = jwtDecode(localStorageToken);
      setUser(decoded.fullName);
      setIsLoggedIn(true);
    }
  }

  return (
    <header>
      <Link className="site-logo" to={"/"}>
        AquaHuntress.com
      </Link>
      <div className="navbar" style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          name=""
          id=""
          style={searchStyle}
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
        />

        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>

        {!isLoggedIn ? (
          <>
            <NavLink to="/user/login" style={userStyles}>
              Login
            </NavLink>
            <NavLink to="/user/register" style={userStyles}>
              Register
            </NavLink>
          </>
        ) : (
          <FaUserCircle
            className="user"
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => setUserInfo(!userInfo)}
          />
        )}

        {userInfo && (
          <ul>
            <NavLink to={"/"}>{user}</NavLink>
            <NavLink
              to={"/user/login"}
              onClick={() => window.localStorage.removeItem("token")}
            >
              deconnection
            </NavLink>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
