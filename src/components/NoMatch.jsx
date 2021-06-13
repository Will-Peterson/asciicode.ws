import React from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";

import "../App.css";
import NoMatchImage from "../assets/images/404bg.jpg";

const NoMatch = () => {
  return (
    <div className="ac-container ac-container--no-match">
      <img className="ac-img--no-match" src={NoMatchImage} />
      <div className="ac-txt--no-match">Oops! Page does not exist!</div>
      <Button variant="dark" className="ac-btn--no-match">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};

export default NoMatch;
