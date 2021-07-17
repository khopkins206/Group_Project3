import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../images/logo4.png";
import RbNavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBtn from "../SearchBtn";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <RbNavBar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Link className="navbar-brand" to="/">
        <img className="logo" alt="logo" src={Logo}></img>
      </Link>
      <SearchBtn></SearchBtn>

      <RbNavBar.Toggle />
      <RbNavBar.Collapse>
        <Nav className="mr-auto">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/homepage"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
          <Link
            to="/Login"
            className={
              window.location.pathname === "/login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Login
          </Link>
          <Nav>
            <Link
              to="/discover"
              className={
                window.location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Discover
            </Link>
          </Nav>
          <NavDropdown
            title="More"
            align="end"
            id="collasible-nav-dropdown dropdown-menu-offet">
            <NavDropdown.Item href="#Create">Create LINEUP</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#Signup">Sign Up</NavDropdown.Item>
          </NavDropdown>
          </Nav>
      </RbNavBar.Collapse>
    </RbNavBar>
  );
}

export default Navbar;
