import React, { useState } from "react";
import SizeButton from "../SizeButton";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { hostName } from "../../utils/Global";

export default function BagItem({ item, removeFromBag, updateBagItem }) {
  const {
    _id: id,
    bagItemId,
    imgurls,
    brand,
    productName,
    sizes,
    size,
    quantity,
    price,
    offer,
  } = item;

  const [selectedSize, setSelectedSize] = useState(size);

  const setSize = (size) => {
    setSelectedSize(size);
    updateBagItem(bagItemId, id, size, quantity);
  };
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
          <div className="h5 font-weight-bold mt-3">Sizes :</div>
          <div className="h5 font-weight-bold">
            {sizes.map((size, index) => {
              return (
                <SizeButton
                  size={size}
                  key={index}
                  selected={selectedSize === size}
                  setSelectedSize={setSize}
                />
              );
            })}
          </div>
          <div className="h5 font-weight-bold mt-3">
            Quantity :{" "}
            <FaChevronCircleDown
              className="bag-icon text-primary mx-3"
              onClick={() =>
                updateBagItem(bagItemId, id, selectedSize, quantity - 1)
              }
            />
            {quantity}
            <FaChevronCircleUp
              className="bag-icon text-primary mx-3"
              onClick={() =>
                updateBagItem(bagItemId, id, selectedSize, quantity + 1)
              }
            />
          </div>
          <div className="h5 font-weight-bold mt-3">
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
                onClick={() => removeFromBag(bagItemId)}
              >
                Remove From Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
