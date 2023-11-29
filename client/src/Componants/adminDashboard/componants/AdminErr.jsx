import "../styleComponants/errAdmin.scss";
function ErrAdminDashboard() {
  return (
    <div className="err">
      <p className="err404">404</p> 
      <p>You can't access this page, only admins can.</p>
    </div>
  );
}

export default ErrAdminDashboard;
