import React from "react";
import NavLinks from "./NavLinks";
import "./Header.css";
import logo from "../../../assets/image 8.png"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Z Logo" />
      </div>

      {/* Navigation Section */}
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <NavLinks name="Products and Services" link="/" />
            <svg width="11.5" height="8.496" fill="#2B2B2B">
              <path d="M0 0 L6 6 L12 0 Z" />
            </svg>
          </li>
          <li>
            <NavLinks name="For Businesses" link="/" />
            <svg width="11.5" height="8.496" fill="#2B2B2B">
              <path d="M0 0 L6 6 L12 0 Z" />
            </svg>
          </li>
          <li>
            <NavLinks name="Sustainability" link="/" />
            <svg width="11.5" height="8.496" fill="#2B2B2B">
              <path d="M0 0 L6 6 L12 0 Z" />
            </svg>
          </li>
          <li>
            <NavLinks name="About Z" link="/" />
            <svg width="11.5" height="8.496" fill="#2B2B2B">
              <path d="M0 0 L6 6 L12 0 Z" />
            </svg>
          </li>
        </ul>
      </nav>

      {/* Action Section */}
      <div className="actions">
        <button className="find-station-btn">Find A Station</button>
        <div className="search-icon">
          <span>Search</span>
          <svg width="17px" height="18.124px" fill="#2B2B2B">
            <path d="M7.37077 0.0489408C3.30632 0.0489408 0 3.35526 0 7.41971C0 11.4842 3.30632 14.7905 7.37077 14.7905C9.08997 14.7905 10.6741 14.2022 11.9148 13.2043L16.3202 17.6097C16.6285 17.918 17.1331 17.918 17.4414 17.6097C17.7497 17.3014 17.7497 16.7968 17.4414 16.4885L13.036 12.0831C14.0339 10.8425 14.6222 9.25843 14.6222 7.53923C14.6222 3.47478 11.3159 0.168455 7.25142 0.168455H7.37077ZM7.37077 1.36963C10.5743 1.36963 13.081 3.87633 13.081 7.0799C13.081 10.2835 10.5743 12.7902 7.37077 12.7902C4.16719 12.7902 1.66048 10.2835 1.66048 7.0799C1.66048 3.87633 4.16719 1.36963 7.37077 1.36963Z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
