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
        <NavLink to="/about">About</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/our-impact">OurImpact</NavLink>
        <NavLink to="/our-team">OurTeam</NavLink>
        <NavLink to="/press">Press</NavLink>
      </nav>
    </header>
  );
}
