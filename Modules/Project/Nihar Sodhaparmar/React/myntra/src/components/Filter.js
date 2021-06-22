import React from "react";

export default function Filter({
  price,
  minPrice,
  maxPrice,
  handleChange,
  brands,
  brandChange,
}) {
  return (
    <div className="">
      <div className="form-group my-4">
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
      <div className="border-top"></div>
      <div className="my-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sortOrder"
            value="ascending"
            onChange={handleChange}
          />
          <label htmlFor="sortOrderAscending" className="form-check-label">
            Low to High
          </label>
        </div>
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="sortOrder"
            value="descending"
            onChange={handleChange}
          />
          <label htmlFor="sortOrderDescending" className="form-check-label">
            High to Low
          </label>
        </div>
      </div>
      {brands.length !== 0 && <div className="border-top"></div>}
      <div className="my-4">
        {brands.map((brand, index) => {
          return (
            <div className="form-check my-2" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                onChange={(event) => {
                  brandChange(index);
                }}
              />
              <label
                htmlFor={`brandCheckbox${index}`}
                className="form-check-label text-capitalize"
              >
                {brand.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
