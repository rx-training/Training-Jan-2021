import React from "react";
import { Link } from "react-router-dom";
import { hostName } from "../../utils/Global";

export default function Product({ product }) {
  const { _id: id, imgurls, productName } = product;
  return (
    <div className="col-6 col-md-4 col-lg-2 my-2">
      <Link to={`/dashboard/products/${id}`} className="card-link">
        <div className="card product-card" style={{ border: "none" }}>
          <div className="card-body">
            <div>
              <img
                className="img-fluid rounded"
                src={`${hostName}/${imgurls[0]}`}
                alt={productName}
                width="100%"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-muted mb-3 line-2 text-capitalize">
              {productName}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
