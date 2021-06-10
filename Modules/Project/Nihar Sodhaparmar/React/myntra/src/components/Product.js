import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { _id: id, imgurls, productName, price } = product;
  return (
    <div className="col-6 col-md-4 col-lg-2">
      <Link to={`/product/${id}`} className="card-link">
        <div className="card product-card" style={{ border: "none" }}>
          <div className="card-body">
            <div className="deals-img-container">
              <img
                className="img-fluid rounded"
                src={imgurls[0]}
                alt={productName}
                width="100%"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-muted">{productName}</div>
            <div>Rs. {price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
