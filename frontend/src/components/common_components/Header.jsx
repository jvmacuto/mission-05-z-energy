import React, { useState } from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="header-title">My App</h1>
          <ul className="navbar-list">
            <li className="navbar-item dropdown">
              <a href="#dropdown1" className="dropdown-toggle">
                Dropdown 1
              </a>
              <div className="dropdown-menu">
                <a href="#option1">Option 1</a>
                <a href="#option2">Option 2</a>
                <a href="#option3">Option 3</a>
              </div>
            </li>
            <li className="navbar-item dropdown">
              <a href="#dropdown2" className="dropdown-toggle">
                Dropdown 2
              </a>
              <div className="dropdown-menu">
                <a href="#option1">Option 1</a>
                <a href="#option2">Option 2</a>
                <a href="#option3">Option 3</a>
              </div>
            </li>
            <li className="navbar-item dropdown">
              <a href="#dropdown3" className="dropdown-toggle">
                Dropdown 3
              </a>
              <div className="dropdown-menu">
                <a href="#option1">Option 1</a>
                <a href="#option2">Option 2</a>
                <a href="#option3">Option 3</a>
              </div>
            </li>
            <li className="navbar-item dropdown">
              <a href="#dropdown4" className="dropdown-toggle">
                Dropdown 4
              </a>
              <div className="dropdown-menu">
                <a href="#option1">Option 1</a>
                <a href="#option2">Option 2</a>
                <a href="#option3">Option 3</a>
                <a href="#option4">Our Story</a>
                <a href="#option5">What We Stand For</a>
                <a href="#option6">Our People</a>
                <a href="#option7">News</a>
                <a href="#option8">Careers at Z</a>
                <a href="#option9">Corporate Centres</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-actions">
          <Link to="/find-station">
            <button className="action-button">Find A Station</button>
          </Link>

          <button className="search-button" onClick={toggleSearchBar}>
            Search <i className="fas fa-search search-icon"></i>
          </button>
        </div>
      </nav>
      <div
        className={`search-bar-container ${showSearchBar ? "show" : "hide"}`}
      >
        <div className="search-bar-wrapper">
          <i className="fas fa-search search-bar-icon"></i>
          <input
            type="text"
            className="long-search-bar"
            placeholder="Type your search here..."
          />
          <button className="close-button" onClick={toggleSearchBar}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
