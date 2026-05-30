import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ show }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${show ? 'show' : 'hide'}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Adam Zweiger
        </NavLink>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
