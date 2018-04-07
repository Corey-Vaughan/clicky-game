import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar fixed-top navbar-dark navbar-custom p-3">
    <span className="navbar-brand">Overwatch Clicky Game</span>
    <span className="navbar-text text-white">{props.message}</span>
    <span className="navbar-text text-white">Score: {props.score} | High Score: {props.highScore}</span>
  </nav>
);

export default Navbar;