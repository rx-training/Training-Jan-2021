import React from "react";

export default function ProductInfo({ product }) {
  const { price, offer, details, sizes, pincodes, returnable } = product;

  return (
    <div className="mt-5">
      <div className="row margin-left-sm">
        <div className="col-md-4 mx-auto">
          <p className="h5 font-weight-bold text-uppercase">price</p>
          <div className="mt-2">
            Rs. {price}{" "}
            <span style={{ color: "#ff905a" }}>
              {offer > 0 ? `(${offer} % OFF)` : null}
            </span>
          </div>
        </div>
        <div className="col-md-4 mx-auto"></div>
      </div>

      <div className="row mt-5 margin-left-sm">
        <div className="col-md-4 mx-auto">
          <p className="h5 font-weight-bold text-uppercase">product details</p>
          <div className="mt-2">{details}</div>
        </div>

        <div className="col-md-4 mx-auto margin-on-small">
          <p className="h5 font-weight-bold text-uppercase">available sizes</p>
          <div>{sizes.join(", ")}</div>
        </div>
      </div>

      <div className="row mt-5 margin-left-sm">
        <div className="col-md-4 mx-auto">
          <p className="h5 font-weight-bold text-uppercase">
            deliverable pincodes
          </p>
          <div className="mt-2">{pincodes.join(", ")}</div>
        </div>
        <div className="col-md-4 mx-auto">
          <p className="h5 font-weight-bold margin-on-small text-uppercase">
            returnable
          </p>
          <div className="mt-2">{returnable.toString()}</div>
        </div>
      </div>
    </div>
  );
}
