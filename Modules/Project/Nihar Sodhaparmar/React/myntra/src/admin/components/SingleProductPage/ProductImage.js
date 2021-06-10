import React from "react";

export default function ProductImage({ image }) {
  return (
    <div className="col-6 col-md-3">
      <div className="card" style={{ border: "none" }}>
        <div className="card-body">
          <img className="img-fluid" src={image} alt="product" width="100%" />
        </div>
      </div>
    </div>
  );
}
