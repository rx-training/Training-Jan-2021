import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchContainer({ handleChange, search, error }) {
  return (
    <div className="container">
      <div className="py-4">
        <div className="search-input-group-container mx-auto">
          <form onSubmit={search}>
            <div className="input-group  ">
              <input
                id="search-input"
                type="search"
                className="form-control"
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button
                  id="search-button"
                  type="submit"
                  className="btn btn-secondary"
                  onClick={search}
                >
                  <FaSearch style={{ fontSize: "12px" }} /> Search
                </button>
              </div>
            </div>
            <p className="text-danger font-weight-bold mt-2 ml-1">{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
