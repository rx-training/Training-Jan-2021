import React from "react";
import { Link } from "react-router-dom";

const AdminNav = ({ active }) => {
  return (
    <div className="col-md-3 p-0">
      <Link
        className={
          active === "trains"
            ? "border border-light d-block p-2 admin-nav-link-active"
            : "border border-light d-block p-2 admin-nav-link"
        }
        to="/dashboard"
      >
        Trains
      </Link>

      <Link
        className={
          active === "stations"
            ? "border border-light d-block p-2 admin-nav-link-active"
            : "border border-light d-block p-2 admin-nav-link"
        }
        to="/dashboard/stations"
      >
        Stations
      </Link>

      <Link
        className={
          active === "routes"
            ? "border border-light d-block p-2 admin-nav-link-active"
            : "border border-light d-block p-2 admin-nav-link"
        }
        to="/dashboard/train-routes"
      >
        Train Routes
      </Link>

      <Link
        className={
          active === "status"
            ? "border border-light d-block p-2 admin-nav-link-active"
            : "border border-light d-block p-2 admin-nav-link"
        }
        to="/dashboard/status"
      >
        Status
      </Link>
      <Link
        className={
          active === "users"
            ? "border border-light d-block p-2 admin-nav-link-active"
            : "border border-light d-block p-2 admin-nav-link"
        }
        to="/dashboard/users"
      >
        Users
      </Link>
    </div>
  );
};

export default AdminNav;
