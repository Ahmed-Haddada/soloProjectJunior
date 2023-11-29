import "../styleComponants/dashboard.scss";
import DashboardDetails from "./componantsDetails/dashboardDetails.jsx";


function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <h1>Dashboard</h1>
        <DashboardDetails />
      </div>
    </div>
  );
}

export default Dashboard;
