import React, { useEffect } from "react";
import Sidebar from "../components/ProfileComponents/Sidebar";
import ProfileHandleSidebar from "../../assets/js/Events/ProfileHandleSidebar";
import HistoryBody from "../components/HistoryComponents/HistoryBody";
import "../../assets/css/History.css";
function History() {
  useEffect(() => {
    ProfileHandleSidebar();
  }, []);

  return (
    <div className="History">
      <Sidebar activeLink="history" />
      <HistoryBody />
    </div>
  );
}

export default History;
