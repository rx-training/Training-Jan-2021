import React, { useState } from "react";
import SizeButton from "../SizeButton";

export default function WishlistItem({ item, deleteWishlistItem, addToBag }) {
  const { wishlistItemId, imgurls, brand, productName, sizes, price, offer } =
    item;

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  return (
    <li className="list-group-item px-5">
      <div className="row my-4">
        <div className="col-sm col-md-4 col-lg-3">
          <img src={imgurls[0]} width="100%" alt={productName} />
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
          <div className="h5 font-weight-bold mt-4">
            Rs. : {price}{" "}
            <span style={{ color: "#ff905a" }}>
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
