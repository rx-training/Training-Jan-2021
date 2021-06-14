import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { _id: id, imgurls, productName, price, brand } = product;
  return (
    <div className="col-6 col-md-4 col-lg-2 px-1">
      <Link to={`/product/${id}`} className="card-link">
        <div className="card product-card px-2" style={{ border: "none" }}>
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
            <div className="font-weight-bold text-capitalize">
              {brand.brandName}
            </div>
            <div className="text-muted line-2 text-capitalize">
              {productName}
            </div>
            <div className="mb-2">Rs. {price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
