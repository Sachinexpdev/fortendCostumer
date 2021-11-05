import React from "react";

function DashboardCard({ active }) {
  return (
    <div className={`DashboardCard ${active == true && "active"}`}>
      <p className="dashboard-card-date">Feb 5</p>
      <p className="dashboard-card-time">
        09:00 AM<span>(60 min)</span>
      </p>

      <p>
        Yoga <span className="level">Beginners</span>
        <span className="complex-name">MTH Compound Complex</span>
        <span>w/ Lucy</span>
      </p>
      <div className="dashboard-card-button">
        <button>Views</button>
      </div>
    </div>
  );
}

export default DashboardCard;
