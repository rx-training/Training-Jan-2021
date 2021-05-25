import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="row bg-light mt-4 text-center rounded fw-bold fs-5">
      <Link
        className="col-md-6 p-3 border border-dark rounded"
        to="/"
        style={{ textDecoration: "none" }}
      >
        Students
      </Link>
      <Link
        className="col-md-6 p-3 border border-dark rounded"
        to="/add-student/_add"
        style={{ textDecoration: "none" }}
      >
        Add Student
      </Link>
    </div>
  );
}

export default Navbar;
