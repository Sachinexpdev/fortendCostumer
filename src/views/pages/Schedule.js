import React, { useEffect } from "react";
import Sidebar from "../components/ProfileComponents/Sidebar";
import "../../assets/css/Schedule.css";
import ScheduleBody from "../components/Schedule/ScheduleBody";
import ProfileHandleSidebar from "../../assets/js/Events/ProfileHandleSidebar";
function Schedule() {
  useEffect(() => {
    ProfileHandleSidebar();
  }, []);
  return (
    <div className="Schedule">
      <Sidebar activeLink="schedule" />
      <ScheduleBody />
    </div>
  );
}

export default Schedule;
