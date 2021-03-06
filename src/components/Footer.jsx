import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      {/* <Link to="/about">About Us</Link> |&nbsp; */}
      <Link to="/contact">Contact Us</Link> |&nbsp;
      <Link to="/terms-and-conditions">Terms and Conditions</Link> |&nbsp;
      <Link to="/privacy-policy">Privacy Policy</Link>
      <div>
        &copy; {new Date().getFullYear()}&nbsp;
        <Link to="/">asciicode.ws</Link>
      </div>
      <div>
        <a 
          href="http://petersondigital.co"
          target="_blank"
          rel="noopener noreferrer">PetersonDigital, LLC</a>
      </div>
    </div>
  );
};

export default Footer;
