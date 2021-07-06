import React from "react";
import { Link } from "react-router-dom";

export default function DahboardColumn({ link, icon, numbers, title }) {
  return (
    <div className="col-sm col-md-6 col-lg-4 my-4">
      <Link to={link} className="dashboard-link">
        <div className="gradient-container dashboard-link-container border rounded">
          <div className="mx-auto" style={{ width: "fit-content" }}>
            <div className="d-flex">
              <div>{icon}</div>
              <div className="text-center dashboard-text">
                <h2 className="mb-0">{numbers}</h2>
                <h2 className="text-capitalize">{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
