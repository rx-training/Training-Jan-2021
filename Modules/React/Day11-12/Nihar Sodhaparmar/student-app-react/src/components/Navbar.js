import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navbar1() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <div className="container">
        <Navbar.Brand>
          <img width="35" src="../logo512.png" alt="logo" /> Student App
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/add-student/_add">Add Student</Nav.Link>
          <Nav.Link href="/">Student List</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}
