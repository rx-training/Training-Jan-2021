import React from "react";

export default function Filter({ price, minPrice, maxPrice, handleChange }) {
  return (
    <div className="py-5">
      <div className="form-group">
        <label className="text-capitalize" htmlFor="price">
          price : rs. {price}
        </label>
        <input
          className="form-control"
          type="range"
          id="price"
          name="price"
          value={price}
          min={minPrice}
          max={maxPrice}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
