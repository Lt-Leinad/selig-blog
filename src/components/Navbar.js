import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/" exact="true">
          Home
        </NavLink>
        <NavLink to="/post">Blog</NavLink>
      </nav>
    </header>
  );
}
