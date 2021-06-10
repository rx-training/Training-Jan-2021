import React from "react";

export default function ProductImage({ img }) {
  return (
    <div className="col-6 col-md-5 col-lg-3 mx-auto">
      <div className="card" style={{ border: "none" }}>
        <div className="card-body">
          <div className="deals-img-container">
            <img className="img-fluid" src={img} alt={img} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
