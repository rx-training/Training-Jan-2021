import React, { useState } from "react";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SizeButton from "../SizeButton";

export default function ProductInfo({
  product,
  isInBag,
  isInWishlist,
  addToBag,
  addToWishlist,
}) {
  const {
    _id: productId,
    brand,
    productName,
    price,
    offer,
    sizes,
    details,
  } = product;

  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div>
      <div className="row mt-5">
        <div className="col-sm col-md-4">
          <div className="product-info-padding">
            <div className="h5 font-weight-bold">{brand.brandName}</div>
            <div className="h5 font-weight-bold text-muted">{productName}</div>
          </div>
        </div>

        <div className="col-sm col-md-4">
          <div className="product-info-padding">
            <div className="h5 font-weight-bold">
              RS. {price}{" "}
              <span style={{ color: "#ff905a" }}>
                {offer > 0 ? `(${offer} % OFF)` : null}
              </span>
            </div>
            <div className="text-success font-weight-bold mt-2">
              inclusive of all taxes
            </div>
          </div>
        </div>

        <div className="col-sm col-md-4">
          <div className="product-info-padding">
            <div className="h5 font-weight-bold">SIZES</div>
            <div>
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
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm col-md">
          <div className="product-info-padding">
            <div className="h5 font-weight-bold">PRODUCT DETAILS</div>
            <h5 className="text-muted text-justify">{details}</h5>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-sm col-md-4"></div>

        <div className="col-sm col-md-4">
          <div className="product-info-padding">
            {isInBag ? (
              <Link
                to="/bag"
                className="btn btn-block btn-pink btn-lg "
                style={{ letterSpacing: 0 }}
              >
                <FaShoppingBag style={{ fontSize: "17px" }} /> GO TO BAG
              </Link>
            ) : (
              <button
                className="btn btn-block btn-pink btn-lg "
                style={{ letterSpacing: 0 }}
                onClick={() => {
                  addToBag(productId, selectedSize, 1);
                }}
              >
                <FaShoppingBag style={{ fontSize: "17px" }} /> ADD TO BAG
              </button>
            )}
          </div>
        </div>

        <div className="col-sm col-md-4">
          <div className="product-info-padding">
            {isInWishlist ? (
              <button className="btn btn-block btn-secondary btn-lg">
                <FaHeart style={{ fontSize: "17px" }} /> WISHLISTED
              </button>
            ) : (
              <button
                className="btn btn-block btn-lg btn-wishlist bg-white"
                onClick={() => addToWishlist(productId)}
              >
                <FaHeart style={{ fontSize: "17px" }} /> WISHLIST
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
