import React from "react";
import { Link } from "react-router-dom";
import { hostName } from "../../utils/Global";

export default function Category({ categoryToBag }) {
  const { category, imgurl } = categoryToBag;

  return (
    <div className="col-6 col-md-4 col-lg-2">
      <Link
        className="card-link"
        to={`/category/${category.categoryName.toLowerCase()}`}
      >
        <div className="card bg-light" style={{ border: "none" }}>
          <div className="card-body">
            <div className="deals-img-container">
              <img
                className="img-fluid rounded-circle"
                src={`${hostName}/${imgurl}`}
                alt={category.categoryName}
                width="100%"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-muted h5 text-capitalize">
              {category.categoryName}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
