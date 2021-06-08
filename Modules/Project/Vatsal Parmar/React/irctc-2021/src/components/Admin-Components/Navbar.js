import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="col-md-3 p-0">
      <Link
        className="border border-light d-block p-2 admin-nav-link"
        to="/dashboard"
      >
        Trains
      </Link>

      <Link
        className="border border-light d-block p-2 admin-nav-link"
        to="/dashboard/stations"
      >
        Stations
      </Link>

      <Link
        className="border border-light d-block p-2 admin-nav-link"
        to="/dashboard/train-routes"
      >
        Train Routes
      </Link>

      <Link
        className="border border-light d-block p-2 admin-nav-link"
        to="/dashboard/status"
      >
        Status
      </Link>
    </div>
  );
};

export default AdminNav;
