import React from "react";

export default function Images({ image }) {
  return (
    <div className="col-6 col-md-3 my-2">
      <div className="card add-product-card" style={{ border: "none" }}>
        <div className="card-body">
          <div className="deals-img-container">
            <img src={image} alt="product" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
