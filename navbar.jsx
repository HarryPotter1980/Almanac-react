import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      Almanac 2024
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="https://antariksh-docs.vercel.app/">Previous Almanac</a>
      </li>
      <li>
        <a href="https://antariksh-data.vercel.app/">About The Club</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="https://forms.gle/wBFayZQMafPzJeuq8">Membership Form</a>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;