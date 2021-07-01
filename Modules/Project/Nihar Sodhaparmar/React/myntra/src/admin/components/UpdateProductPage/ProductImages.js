import React from "react";
import { hostName } from "../../../utils/Global";

export default function Images({ image, index, removeImage }) {
  return (
    <div className="col-6 col-md-3 my-2">
      <div className="card add-product-card" style={{ border: "none" }}>
        <div className="card-body">
          <div className="deals-img-container">
            <img src={`${hostName}/${image}`} alt="product" width="100%" />
          </div>
          <div className="text-center">
            <button
              className="btn btn-sm btn-danger mt-3"
              type="button"
              onClick={() => {
                removeImage(index);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
