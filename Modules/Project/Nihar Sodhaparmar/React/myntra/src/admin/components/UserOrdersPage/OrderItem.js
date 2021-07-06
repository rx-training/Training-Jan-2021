import React from "react";
import { hostName } from "../../../utils/Global";

export default function OrderItem({ product }) {
  const { product: newProduct, quantity, salePrice, size } = product;
  const { productName, imgurls, brand } = newProduct;

  return (
    <li className="list-group-item">
      <div className="row my-2">
        <div className="col-md-1 col-lg-1"></div>
        <div className="col-sm col-md-3 col-lg-2">
          <img
            src={`${hostName}/${imgurls[0]}`}
            width="70%"
            alt={productName}
            className="d-block mx-auto"
          />
        </div>
        <div className="col-sm col-md-8 col-lg-8 mx-auto wishlist-and-bag-content">
          <div className="h6 font-weight-bold text-muted text-capitalize">
            {productName}
          </div>
          <div className="h6 font-weight-bold text-muted text-capitalize">
            {brand.brandName}
          </div>
          <div className="h6 font-weight-bold text-muted">Size : {size}</div>
          <div className="h6 font-weight-bold text-muted">
            Quantity : {quantity}
          </div>
          <div className="h6 font-weight-bold text-muted">
            Price : {salePrice}
          </div>
        </div>
      </div>
    </li>
  );
}
