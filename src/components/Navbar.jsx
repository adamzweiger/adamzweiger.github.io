import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Adam Zweiger
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/writing" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Writing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
