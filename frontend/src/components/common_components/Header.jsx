import React, { useState } from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import logo from "../../../public/z_energy_logo.png";

function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="" className="header-logo" />
          <ul className="navbar-list">
            <li className="navbar-item dropdown">
              <a href="#dropdown1" className="dropdown-toggle">
                Products & Services
              </a>
              <div className="dropdown-menu">
                <a href="#option1">At the Station</a>
                <a href="#option2">Z App</a>
                <a href="#option3">Power your home with Z</a>
                <a href="#option4">Rewards & Promotions</a>
              </div>
            </li>
            <li className="navbar-item dropdown">
              <a href="#dropdown2" className="dropdown-toggle">
                for Businesses
              </a>
              <div className="dropdown-menu">
                <a href="#option1">Z Business Fuel Card</a>
                <a href="#option2">Fuels & Services</a>
                <a href="#option3">Business Tips & Stories</a>
              </div>
            </li>
            <li className="navbar-item dropdown">
              <a href="#dropdown3" className="dropdown-toggle">
                Sustainability
              </a>
              <div className="dropdown-menu">
                <a href="#option1">Our Sustainability Goals</a>
                <a href="#option2">Nature Restoration</a>
                <a href="#option3">Supplier Code of Conduct</a>
                <a href="#option4">Supporting Electric Vehicles</a>
              </div>
            </li>
            <li className="navbar-item dropdown">
              <a href="#dropdown4" className="dropdown-toggle">
                About Z
              </a>
              <div className="dropdown-menu">
                <a href="#option1">Our Story</a>
                <a href="#option2">What We Stand For</a>
                <a href="#option3">Our People</a>
                <a href="#option4">News</a>
                <a href="#option5">Careers at Z</a>
                <a href="#option6">Corporate Centres</a>
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
