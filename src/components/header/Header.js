import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let activeStyle = {
    backgroundColor: "lightgreen",
  };
  return (
    <div>
      <nav className="header">
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Products
        </NavLink>
        <NavLink
          to="/friends"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Friends
        </NavLink>
        <NavLink
          to="/allpost"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
