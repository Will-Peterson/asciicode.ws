import React from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../App.css";
import NoMatchImage from "../assets/images/404bg.jpg";

const NoMatch = () => {
  return (
    <div className="ac-container ac-container--no-match">
      <img className="ac-img--no-match" src={NoMatchImage} alt="Page does not exist" />
      <div className="ac-txt--no-match">Oops! Page does not exist!</div>
        <Link to="/">
          <Button variant="dark" className="ac-btn--no-match">Home
          </Button>
        </Link>
    </div>
  );
};

export default NoMatch;
