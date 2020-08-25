import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import NoMatch from './NoMatch';

// import Contact from './Contact';
// import About from './About';
// import NoMatch from './NoMatch.js';

// import Navbar from 'react-bootstrap/navbar';
// import Nav from 'react-bootstrap/nav';
// import Button from 'react-bootstrap/button';
// import Form from 'react-bootstrap/form';
// import FormControl from 'react-bootstrap/formcontrol';

const Header = () => {
  return (
    
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/terms-of-service">Terms of Service</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <hr />
      </div>
    
  );
}

export default Header;