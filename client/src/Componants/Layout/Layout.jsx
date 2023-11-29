import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Layout({setSearch}) {
  return (
    <>
      <Header setSearch={setSearch} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
