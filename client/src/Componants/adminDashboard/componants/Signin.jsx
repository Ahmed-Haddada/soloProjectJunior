import { Navigate } from "react-router-dom";

function Signin() {
  if (window.localStorage.getItem("admin")) {
    window.localStorage.removeItem("admin");
  }

  return <Navigate to={"/user/login"}></Navigate>;
}

export default Signin;
