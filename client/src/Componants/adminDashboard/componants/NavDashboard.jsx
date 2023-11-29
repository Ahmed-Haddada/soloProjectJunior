import { Link, NavLink } from "react-router-dom";
import "../styleComponants/SideBar.scss";
function NavDashboard() {
  const activeStyles = {
    color: "black",
    background: "white",
    width: "100%",
    padding: "10px",
    borderRadius: "30px 0px 0px 30px",
    transition: "0.5s",
  };
  return (
    <nav>
      <Link to="/admin/dashboard" className="logo">
        Material Dashboard
      </Link>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="/admin/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="/admin/products"
      >
       Add Products
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="/admin/notification"
      >
        Notfication
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="/admin/profile"
      >
        Profile
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="/admin/signin"
      >
        Sign In
      </NavLink>
    </nav>
  );
}

export default NavDashboard;
