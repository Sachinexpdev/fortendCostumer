import React, { useEffect } from "react";
import Sidebar from "../components/ProfileComponents/Sidebar";
import PlansBody from "../components/PlanAndPackagesComponents/PlansBody";
import "../../assets/css/plansAndPackages.css";
import ProfileHandleSidebar from "../../assets/js/Events/ProfileHandleSidebar";
function PlanAndPackages() {
  useEffect(() => {
    ProfileHandleSidebar();
  }, []);
  return (
    <div className="PlanAndPackages">
      <Sidebar activeLink="PlanAndPackages" />
      <PlansBody />
    </div>
  );
}

export default PlanAndPackages;
