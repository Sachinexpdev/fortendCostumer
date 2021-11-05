import React, { useEffect } from "react";
import ExploreBody from "../components/ExploreComponents/ExploreBody";
import Sidebar from "../components/ProfileComponents/Sidebar";
// import ProfileHandleSidebar from "../../assets/js/Events/ProfileHandleSidebar";
import "../../assets/css/explore.css";
function Explore() {

  // useEffect(() => {
  //   ProfileHandleSidebar();
  // }, []);
  
  return (
    <div className="explore">
      <Sidebar activeLink="explore" />
      <ExploreBody />
    </div>
  );
}

export default Explore;
