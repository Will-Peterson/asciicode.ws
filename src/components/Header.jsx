import React from "react";

import * as ReactBootStrap from "react-bootstrap";

const Header = () => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      className='m-4'
    >
      <ReactBootStrap.Navbar.Brand href="/">
        ASCIICode.ws
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          {/* <ReactBootStrap.Nav.Link href="about" className='link-hover-color'>
            About Us
          </ReactBootStrap.Nav.Link> */}
          <ReactBootStrap.Nav.Link href="contact" className='link-hover-color'>
            Contact Us
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="terms-and-conditions" className='link-hover-color'>
            Terms and Conditions
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="privacy-policy" className='link-hover-color'>
            Privacy Policy
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default Header;
