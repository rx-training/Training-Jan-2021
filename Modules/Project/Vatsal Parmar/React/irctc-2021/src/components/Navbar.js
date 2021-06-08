import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { getToken, getUser, removeUserSession } from "../Utils/Common";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (getUser() && getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    removeUserSession();
    window.location.href = "/";
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src="../../img/secondary-logo.png" width="40px" alt="logo" />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {isLoggedIn ? (
              <NavItem>
                <NavLink style={{ cursor: "pointer" }} onClick={handleLogout}>
                  Logout
                </NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            )}
            {!isLoggedIn && (
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
            )}
            {isLoggedIn && (
              <NavItem>
                <NavLink href="/user">Profile</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
        <NavbarBrand className="d-none d-md-block">
          <img src="../../img/logo.png" width="40px" alt="logo" />
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default MainNav;
