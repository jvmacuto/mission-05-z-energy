import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">My App</h1>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
