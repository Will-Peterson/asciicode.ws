import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      className='m-4'
    >
      <Navbar.Brand href="/">
        ASCIICode.ws
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="about" className='navbar--link-color'>
            About Us
          </Nav.Link> */}
          <Nav.Link href="contact" className='navbar--link-color'>
            Contact Us
          </Nav.Link>
          <Nav.Link href="terms-and-conditions" className='navbar--link-color'>
            Terms and Conditions
          </Nav.Link>
          <Nav.Link href="privacy-policy" className='navbar--link-color'>
            Privacy Policy
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
