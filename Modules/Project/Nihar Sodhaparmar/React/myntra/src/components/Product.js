import React from "react";
import { Link } from "react-router-dom";
import { hostName } from "../utils/Global";

export default function Product({ product }) {
  const { _id: id, imgurls, productName, price, brand, offer } = product;
  return (
    <div className="col-6 col-md-4 col-lg-2 px-1">
      <Link to={`/product/${id}`} className="card-link">
        <div className="card product-card px-2" style={{ border: "none" }}>
          <div className="card-body">
            <div className="deals-img-container">
              <img
                className="img-fluid rounded"
                src={`${hostName}/${imgurls[0]}`}
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
            <div className="mb-2">
              Rs.{" "}
              {offer > 0
                ? parseInt(price) - parseInt((price * offer) / 100)
                : price}{" "}
              <span className="text-muted mx-1 text-line-through">
                {offer > 0 ? `Rs. ${price}` : ""}
              </span>{" "}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
