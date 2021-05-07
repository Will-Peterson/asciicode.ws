import React from "react";

import * as ReactBootStrap from "react-bootstrap";

const Header = () => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href="/">
        ASCIICode.ws
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="about">
            About Us
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="contact">
            Contact Us
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="terms-and-conditions">
            Terms and Conditions
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="privacy-policy">
            Privacy Policy
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default Header;
