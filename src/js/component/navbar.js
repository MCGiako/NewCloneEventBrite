import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navbar1() {
  const logoUrl =
    "https://static-00.iconduck.com/assets.00/eventbrite-icon-256x256-u1xlvbo7.png";

  return (
    <Navbar
      bg="dark"
      expand="lg menu"
      variant="dark"
      className="container-fluid"
    >
      <Navbar.Brand href="#home">
        <img src={logoUrl} width="50" height="50" alt="Logo" />
        <span className="brand-text">Eventbrite</span>
      </Navbar.Brand>
      <Nav className="navbar navbar-expand-lg menu">
        <Nav.Link href="#home">Find Events</Nav.Link>
        <Nav.Link href="#features">Create Events</Nav.Link>
        <Nav.Link href="#pricing">Help Center</Nav.Link>
        <Nav.Link href="#pricing">Log In</Nav.Link>
        <Nav.Link href="#pricing">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navbar1;
