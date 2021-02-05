import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.styles.css";

const Navbar = () => {
  return (
    <nav className="stroke">
      <ul>
        <li>
          <NavLink
            to="/"
            className="link"
            style={{ textDecoration: "none" }}
            activeStyle={{ color: "black" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            style={{ textDecoration: "none", color: "black" }}
            activeStyle={{ color: "black" }}
          >
            Quiz
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
