import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../Utils/Storage";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <Link to="#" className="navbar-brand">
          <img
            src="../../images/myntra-logo.png"
            alt="Logo"
            height="50"
            width="50"
          />
        </Link>

        <button
          className="navbar-toggler navbar-toggler-right p-0"
          type="button"
          data-toggle="collapse"
          data-target="#navResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navResponsive"
          style={{ fontWeight: "600" }}
        >
          <ul className="navbar-nav px-3">
            <li className="nav-item px-2">
              <Link to="/dashboard/products" className="nav-link">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/dashboard/brands" className="nav-link">
                BRANDS
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/dashboard/categories" className="nav-link">
                CATEGORIES
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/dashboard/sub-categories" className="nav-link">
                SUB CATEGORIES
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/dashboard/offers" className="nav-link">
                OFFERS
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto px-3 py-2">
            <li className="nav-item px-2">
              {isLoggedIn ? (
                <Link to="/logout" className="btn btn-sm navbar-login-btn">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="btn btn-sm navbar-login-btn">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
