import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./icons_assets/Logo.svg";

function Navbar() {
  return (
    <nav className="App">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="Home" />
        </Link>
      </div>
      <div id="nav">
        <Link to="/" style={{ marginRight: "40px" }}>
          Home
        </Link>
        <Link to="/menu" style={{ marginRight: "40px" }}>
          Menu
        </Link>
        <Link to="/reservations" style={{ marginRight: "40px" }}>
          Reservations
        </Link>
        <Link to="/order" style={{ marginRight: "40px" }}>
          Order Online
        </Link>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          Menu
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
