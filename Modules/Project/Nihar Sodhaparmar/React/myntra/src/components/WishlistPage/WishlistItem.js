import React, { useState } from "react";
import { hostName } from "../../utils/Global";
import SizeButton from "../SizeButton";

export default function WishlistItem({
  item,
  deleteWishlistItem,
  addToBag,
  sizeError,
}) {
  const { wishlistItemId, imgurls, brand, productName, sizes, price, offer } =
    item;

  const [selectedSize, setSelectedSize] = useState("");
  return (
    <li className="list-group-item px-5">
      <div className="row my-4">
        <div className="col-sm col-md-4 col-lg-3">
          <img
            src={`${hostName}/${imgurls[0]}`}
            width="100%"
            alt={productName}
          />
        </div>
        <div className="col-sm col-md-8 col-lg-8 mx-auto wishlist-and-bag-content">
          <div className="h5 font-weight-bold text-capitalize">
            {brand.brandName}
          </div>
          <div className="h5 font-weight-bold text-capitalize">
            {productName}
          </div>
          <div className="h5 font-weight-bold mt-4">Sizes :</div>
          <div className="h5 font-weight-bold">
            {sizes.map((size, index) => {
              return (
                <SizeButton
                  size={size}
                  key={index}
                  selected={selectedSize === size}
                  setSelectedSize={setSelectedSize}
                />
              );
            })}
          </div>
          <p className="text-danger mb-0 font-weight-bold">
            {sizeError[wishlistItemId]}
          </p>
          <div className="h5 font-weight-bold mt-4">
            Rs.{" "}
            {offer > 0
              ? parseInt(price) - parseInt((price * offer) / 100)
              : price}{" "}
            <span className="text-muted mx-1 text-line-through">
              {offer > 0 ? `Rs. ${price}` : ""}
            </span>{" "}
            <span className="text-orange">
              {offer > 0 ? `(${offer} % OFF)` : null}
            </span>
          </div>
          <div className="row">
            <div className="col-sm col-md-7 col-lg-4">
              <button
                className="btn btn-danger mt-3 btn-block"
                onClick={() => deleteWishlistItem(wishlistItemId)}
              >
                Remove From Wishlist
              </button>
            </div>
            <div className="col-sm col-md-5 col-lg-4">
              <button
                className="btn btn-primary mt-3 btn-block"
                onClick={() => addToBag(wishlistItemId, selectedSize, 1)}
              >
                Add To Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
