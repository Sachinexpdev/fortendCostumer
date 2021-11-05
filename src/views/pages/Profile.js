import React, { useEffect } from "react";
import "../../assets/css/Profile.css";
import ProfileBody from "../components/ProfileComponents/ProfileBody";
import Sidebar from "../components/ProfileComponents/Sidebar";

import ProfileHandleSidebar from "../../assets/js/Events/ProfileHandleSidebar";

function Profile() {
  useEffect(() => {
    ProfileHandleSidebar();
  }, []);
  return (
    <div className="profile">
      <Sidebar />
      <ProfileBody />
    </div>
  );
}

export default Profile;
