import { NavLink, Outlet } from "react-router-dom";
import "../../styleComponants/productLayout.scss";
function LayoutDashboardProduct() {
  const activeStyles = {
    fontWeight: "bold",
    borderBottom: "solid 2px black",
    color: "#161616",
  };

  return (
    <>
      <div className="navProduct">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/admin/products"
        >
          Add Product
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="updateProduct"
        >
          Update Product
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default LayoutDashboardProduct;
