import React from "react";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  const { categoryName, title, image } = category;

  return (
    <div className="col-6 col-md-4 col-lg-2">
      <Link className="card-link" to={`/category/${categoryName}`}>
        <div className="card bg-light" style={{ border: "none" }}>
          <div className="card-body">
            <div className="deals-img-container">
              <img
                className="img-fluid rounded-circle"
                src={image}
                alt={title}
                width="100%"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-muted h5 text-capitalize">{title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
