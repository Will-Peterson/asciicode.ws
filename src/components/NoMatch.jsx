import React from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";

import "../App.css";
import NoMatchImage from "../assets/images/404bg.jpg";

const NoMatch = () => {
  return (
    <div className="no-match-container">
      <img className="no-match-image" src={NoMatchImage} />
      <div className="oops">Oops! Page does not exist!</div>
      <Button variant="dark" className="home-button">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};

export default NoMatch;
