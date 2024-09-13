import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-list">
          <li className="footer-item">
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li className="footer-item">
            <a href="#terms">Terms of Service</a>
          </li>
          <li className="footer-item">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <p className="footer-text">© 2023 My App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
