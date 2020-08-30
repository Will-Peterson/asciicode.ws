import React from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';


// import Home from './Home';
// import Contact from './Contact';
// import About from './About';
// import TermsOfService from './TermsOfService';
// import PrivacyPolicy from './PrivacyPolicy';
// import NoMatch from './NoMatch';

// import Contact from './Contact';
// import About from './About';
// import NoMatch from './NoMatch.js';

// import Navbar from 'react-bootstrap/navbar';
// import Nav from 'react-bootstrap/nav';
// import Button from 'react-bootstrap/button';
// import Form from 'react-bootstrap/form';
// import FormControl from 'react-bootstrap/formcontrol';

// const Header = () => {
//   return (
    
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/terms-of-service">Terms of Service</Link>
//           </li>
//           <li>
//             <Link to="/privacy-policy">Privacy Policy</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//         <hr />
//       </div>
    
//   );
// }


const Header = () => {
  return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="#home">ASCIICode.ws</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="#about">About Us</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link to='/contact' href="#contact">Contact Us</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#terms-of-service">Terms of Service</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#privacy-policy">Privacy Policy</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Navbar>
  );
}


export default Header;