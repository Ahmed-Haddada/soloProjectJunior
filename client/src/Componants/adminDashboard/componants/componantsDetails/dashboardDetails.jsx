import { useContext } from "react";
import { MyContext } from "../../../../context.jsx";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import "../../styleComponants/dashboarddetails.scss";


function DashboardDetails() {
  const { user } = useContext(MyContext);
  return (
    <div className="containerBoxDashboard" style={{ display: "flex" }}>
      <div className="box">
        <FaMoneyBillAlt className="icon" style={{ background: "#252e8f" }} />
        <div>
          <p>Today's Users</p>
          <p>0</p>
        </div>
      </div>
      <div className="box">
        <FaChartSimple className="icon" style={{ background: "#64ae2a" }} />
        <div>
          <p>Revenue</p>
          <p>0</p>
        </div>
      </div>
      <div className="box">
        <FaPerson className="icon" style={{ background: "#dc3b7c" }} />
        <div>
          <p>Followers</p>
          <p>{user.length}</p>
        </div>
      </div>

    </div>
  );
}

export default DashboardDetails;
