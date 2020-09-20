import React, { Component } from "react";
import NavbarItem from "./navbarItem";

//import PropTypes from "prop-types";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light justify-content-center"
        // style={{ backgroundColor: "#f19321" }}
        style={{ backgroundColor: "#EAE2B7" }}
      >
        <a className="navbar-brand" href="/">
          Inicio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <NavbarItem></NavbarItem>
        </div>
      </nav>
    );
  }
}

export default Navbar;
