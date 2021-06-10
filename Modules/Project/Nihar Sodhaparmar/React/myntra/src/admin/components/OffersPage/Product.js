import React from "react";

export default function Product({ product, applyOfferBtnClick }) {
  const { _id: id, imgurls, productName, offer } = product;
  return (
    <div className="col-6 col-md-3 col-lg-2 my-2">
      <div className="card product-card" style={{ border: "none" }}>
        <div className="card-body">
          <div className="deals-img-container">
            <img src={imgurls[0]} alt="product" width="100%" />
          </div>
          <div className="text-center">
            <div className="text-muted mt-3 font-weight-bold">
              {productName}
            </div>
            <div className="mt-2 text-uppercase font-weight-bold">
              Offer : {offer}
            </div>
            <button
              className="btn btn-sm btn-primary mt-3"
              type="button"
              onClick={() => {
                applyOfferBtnClick(id, offer);
              }}
            >
              Apply Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
