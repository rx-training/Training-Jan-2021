import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <div className="alert alert-primary border border-primary w-50 p-4 mx-auto text-center">
        <h1>404 Not Found</h1>
        <Link to="/" className="btn-link mx-auto">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
