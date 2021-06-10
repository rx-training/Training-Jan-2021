import React from "react";
import { Link } from "react-router-dom";

export default function DealsProduct({ product }) {
  const { _id: id, imgurls, productName, brand, offer } = product;
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
            <h5 className="font-weight-bold">{brand.brandName}</h5>
            <span className="h5 font-weight-bold" style={{ color: "#ff905a" }}>
              {offer > 0 ? `${offer} % OFF` : null}
            </span>
            <div className="text-muted">{productName}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
