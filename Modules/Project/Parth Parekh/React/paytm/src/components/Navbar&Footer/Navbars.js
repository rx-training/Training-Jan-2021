import React, { useState } from "react";

import { FaHome } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";


import { SiGnuprivacyguard } from "react-icons/si";
import { IoLogIn } from "react-icons/io5";

import styled from "styled-components";

import logo from "../../download.png";
import addmoney from "../../add_money.svg";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink,
} from "reactstrap";
import { removeUserSession } from "../../Utils/Common";

export default function Navbars(props) {
    const { login, logout, signup } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        removeUserSession();
        window.location.href = "/";
    };

    return (
        <NavbarWrapper>
            <div className="container-fuild navwrapper bg-light ">
                <Navbar color="light" light expand="lg">
                    <div className="row">
                        <NavbarBrand className="logo" href="/">
                            <img src={logo} alt="paytm logo" width="180" />
                        </NavbarBrand>
                    </div>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto " navbar>
                            <NavItem className="nav-links my-auto mx-3">
                                <NavLink href="/" className="linkstyle">
                                    <FaHome className="react-icons" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-links my-auto ">
                                <NavLink href="/addMoney" className="linkstyle">
                                    <img
                                        src={addmoney}
                                        alt="add Money"
                                        className="m-2"
                                    />
                                    Add Money
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-links my-auto mx-3">
                                <NavLink
                                    href="/transfermoney"
                                    className="linkstyle"
                                >
                                    <FaHandshake className="react-icons" />
                                    Money Transfer
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-links my-auto ">
                                <NavLink href="/passbook" className="linkstyle">
                                    <FaWallet
                                        className="react-icons"
                                        style={{ fontSize: "1.4rem" }}
                                    />
                                    Passbook
                                </NavLink>
                            </NavItem>
                            {login && (
                                <NavItem className="nav-links  my-auto mx-3">
                                    <NavLink
                                        href="/login"
                                        className="linkstyle"
                                    >
                                        {" "}
                                        <IoLogIn
                                            style={{
                                                color: "#164182",
                                                margin: "auto 5px",
                                                fontSize: "1.7rem",
                                                textDecoration: "none",
                                            }}
                                        />{" "}
                                        Login
                                    </NavLink>
                                </NavItem>
                            )}

                            {signup && (
                                <NavItem className="nav-links my-auto">
                                    <NavLink
                                        href="/signup"
                                        className="linkstyle"
                                    >
                                        {" "}
                                        <SiGnuprivacyguard
                                            style={{
                                                color: "#164182",
                                                margin: "auto 5px",
                                                fontSize: "1.7rem",
                                                textDecoration: "none",
                                            }}
                                        />{" "}
                                        Signup
                                    </NavLink>
                                </NavItem>
                            )}

                            {logout && (
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle
                                        nav
                                        caret
                                        style={{
                                            color: "#164182",
                                        }}
                                        className="ml-3 mt-2"
                                    >
                                        Profile
                                    </DropdownToggle>
                                    <DropdownMenu
                                        right
                                        className="p-3 bg-light"
                                    >
                                        <NavLink
                                            href="/profile"
                                            className="btn"
                                        >
                                            Account Info
                                        </NavLink>
                                        <DropdownItem divider />

                                        <button
                                            type="button"
                                            className="btn text-muted h3"
                                            onClick={handleLogout}
                                        >
                                            {" "}
                                            <RiLogoutCircleLine
                                                style={{
                                                    color: "#164182",
                                                    margin: "auto 5px",
                                                    fontSize: "1.2rem",
                                                    textDecoration: "none",
                                                }}
                                            />
                                            Logout
                                        </button>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            )}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </NavbarWrapper>
    );
}

const NavbarWrapper = styled.div`
    /* font-size: 20px;
    text-align: center; */

    .react-icons {
        color: #164182;
        margin: auto 5px;
        font-size: 2rem;
    }
`;
