import { useEffect, useState } from "react";
import AdminErr from "./componants/AdminErr.jsx";
import NavDashboard from "./componants/NavDashboard.jsx";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("admin")) {
      setErr(true);
      console.log("no");
    }
  }, []);

  return (
    <>
      {err ? (
        <AdminErr />
      ) : (
        <div style={{ display: "flex", height: "100%" }} className="dash">
          <NavDashboard />
          <main className="dashboard-content">
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}

export default DashboardLayout;
