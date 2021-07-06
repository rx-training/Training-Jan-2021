import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBookmark, FaShoppingBag } from "react-icons/fa";
import { getToken, getUserId } from "../utils/Storage";
import { Navbar } from "react-bootstrap";
import BagService from "../services/BagService";

export default function Navbar1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  const [bagItems, setBagItems] = useState(0);

  async function getData() {
    if (getToken()) {
      try {
        let bagItems = await BagService.getBagItemsByCustomerId(
          getUserId(),
          getToken()
        );

        bagItems = bagItems.data;
        setBagItems(bagItems.length);
      } catch (error) {}
    }
  }

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    getData();
  }, [navExpanded, getData]);

  const setNewNavExpanded = (expanded) => {
    setNavExpanded(expanded);
  };

  const closeNav = () => {
    setNavExpanded(false);
  };

  return (
    <>
      <Navbar
        onToggle={setNewNavExpanded}
        expanded={navExpanded}
        expand="lg"
        fixed="top"
        // className="navbar navbar-expand-lg navbar-light fixed-top"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="../../myntra-logo.png"
              alt="Logo"
              height="50"
              width="50"
            />
          </Link>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <ul
              className="navbar-nav px-3 navbar-left-link-container"
              style={{ fontWeight: "600" }}
            >
              <li className="nav-item px-2">
                <div className="nav-link">
                  <div className="dropdown navbar-dropdown-container">
                    <div
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      MEN
                    </div>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link
                        to="/main-category/men/shirt"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        shirt
                      </Link>

                      <Link
                        to="/main-category/men/t-shirt"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        t-shirt
                      </Link>

                      <Link
                        to="/main-category/men/jeans"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        jeans
                      </Link>

                      <Link
                        to="/main-category/men/trouser"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        trouser
                      </Link>

                      <Link
                        to="/main-category/men/shoes"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        shoes
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item px-2">
                <div className="nav-link">
                  <div className="dropdown navbar-dropdown-container">
                    <div
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      WOMEN
                    </div>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link
                        to="/main-category/women/kurta"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        kurtas &#38; suits
                      </Link>

                      <Link
                        to="/main-category/women/saree"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        sarees
                      </Link>

                      <Link
                        to="/main-category/women/t-shirt"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        t-shirt
                      </Link>

                      <Link
                        to="/main-category/women/jeans"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        jeans
                      </Link>

                      <Link
                        to="/main-category/women/shoes"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        shoes
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item px-2">
                <div className="nav-link">
                  <div className="dropdown navbar-dropdown-container">
                    <div
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      KIDS
                    </div>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link
                        to="/main-category/kids/shirt"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        shirt
                      </Link>

                      <Link
                        to="/main-category/kids/t-shirt"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        t-shirt
                      </Link>

                      <Link
                        to="/main-category/kids/jeans"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        jeans
                      </Link>

                      <Link
                        to="/main-category/kids/short"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        shorts
                      </Link>

                      <Link
                        to="/main-category/kids/shoes"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        shoes
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item px-2">
                <div className="nav-link">
                  <div className="dropdown navbar-dropdown-container">
                    <div
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      HOME &#38; LIVING
                    </div>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link
                        to="/main-category/home &#38; living/bedsheets"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        bedsheets
                      </Link>

                      <Link
                        to="/main-category/home &#38; living/bedding-sets"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        bedding sets
                      </Link>

                      <Link
                        to="/main-category/home &#38; living/blankets-quits-and-dohars"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        blankets, quilts and &#38; dohars
                      </Link>

                      <Link
                        to="/main-category/home &#38; living/towels"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        bath towels
                      </Link>

                      <Link
                        to="/main-category/home &#38; living/carpets"
                        className="text-capitalize dropdown-item"
                        onClick={closeNav}
                      >
                        carpets
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="search_container ml-auto">
              <ul
                className="navbar-nav"
                style={{ fontSize: "13px", fontWeight: "600" }}
              >
                {/* <li className="nav-item mr-3">
                  <div className="input-group mt-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaSearch aria-hidden="true" className="text-muted" />
                      </span>
                    </div>
                    <input
                      className="form-control d-block form-control-lg"
                      type="search"
                      style={{ height: "30px" }}
                    />
                  </div>
                </li> */}
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="nav-icon-container dropdown navbar-dropdown-container">
                      <div
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="text-center text-muted">
                          <FaUser aria-hidden="true" />
                        </div>
                        <div>Profile</div>
                      </div>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link className="dropdown-item" to="/orders">
                          Orders
                        </Link>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                        <div className="dropdown-hr"></div>
                        <div className="dropdown-item">
                          {isLoggedIn ? (
                            <Link
                              to="/logout"
                              className="btn btn-sm navbar-login-btn"
                            >
                              Logout
                            </Link>
                          ) : (
                            <Link
                              to="/login"
                              className="btn btn-sm navbar-login-btn"
                            >
                              Login
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* **************** */}
                <li className="nav-item">
                  <Link to="/wishlist" className="nav-link">
                    <div className="nav-icon-container">
                      <div className="text-center text-muted">
                        <FaBookmark aria-hidden="true" />
                      </div>
                      <div>Wishlist</div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link id="view-bag" to="/bag" className="nav-link">
                    <div className="nav-icon-container">
                      {bagItems > 0 && (
                        <div className="bag-items-count">{bagItems}</div>
                      )}
                      <div className="text-center text-muted">
                        <FaShoppingBag aria-hidden="true" />
                      </div>

                      <div>Bag</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className="navbar search-container2 pt-2">
        <div className="container-fluid">
          {/* <div className="input-group mt-3 ml-auto serach_box">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaSearch aria-hidden="true" className="text-muted" />
              </span>
            </div>
            <input
              className="form-control d-block form-control-lg"
              type="search"
              style={{ height: "30px" }}
            />
          </div> */}
          <div className="nav-item">
            {/* **************** */}
            <div className="nav-item">
              <div className="nav-link">
                <div className="nav-icon-container dropdown navbar-dropdown-container">
                  <div data-toggle="dropdown">
                    <div className="text-center text-muted">
                      <FaUser aria-hidden="true" />
                    </div>
                    <div>Profile</div>
                  </div>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/orders">
                      Orders
                    </Link>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                    <div className="dropdown-hr"></div>
                    <div className="dropdown-item">
                      {isLoggedIn ? (
                        <Link
                          to="/logout"
                          className="btn btn-sm navbar-login-btn"
                        >
                          Logout
                        </Link>
                      ) : (
                        <Link
                          to="/login"
                          className="btn btn-sm navbar-login-btn"
                        >
                          Login
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* **************** */}
          </div>
          <div className="nav-item">
            <Link to="/wishlist" className="nav-link">
              <div className="nav-icon-container">
                <div className="text-center text-muted">
                  <FaBookmark aria-hidden="true" />
                </div>
                <div className="text-dark">Wishlist</div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/bag" className="nav-link">
              <div className="nav-icon-container">
                {bagItems > 0 && (
                  <div className="medium-bag-items-count">{bagItems}</div>
                )}
                <div className="text-center text-muted">
                  <FaShoppingBag aria-hidden="true" />
                </div>
                <div className="text-dark">Bag</div>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="container-fluid">
          <div className="input-group mt-3 ml-auto serach_box_small">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaSearch aria-hidden="true" className="text-muted" />
              </span>
            </div>
            <input
              className="form-control d-block form-control-lg"
              type="search"
              style={{ height: "30px" }}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
