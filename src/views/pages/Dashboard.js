import React, { useEffect } from "react";
import Sidebar from "../components/ProfileComponents/Sidebar";
import ProfileHandleSidebar from "../../assets/js/Events/ProfileHandleSidebar";
import DashboardBody from "../components/DashboardComponents/DashboardBody";
import "../../assets/css/dashboard.css";
function Dashboard() {
  useEffect(() => {
    ProfileHandleSidebar();
  }, []);

  
  return (
    <div className="Dashboard">
      <Sidebar activeLink="dashboard" />
      <DashboardBody />
    </div>
  );
}

export default Dashboard;
