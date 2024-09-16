import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Products & Services</h4>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/station">At the Station</a>
            </li>
            <li className="footer-item">
              <a href="/app">Z App</a>
            </li>
            <li className="footer-item">
              <a href="/power">Power your home with Z</a>
            </li>
            <li className="footer-item">
              <a href="/rewards">Rewards & Promotions</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For Businesses</h4>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/fuelcards">Z Business Fuel Card</a>
            </li>
            <li className="footer-item">
              <a href="/fuelsservices">Fuels & Services</a>
            </li>
            <li className="footer-item">
              <a href="/businesstips">Business Tips & Stories</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Sustainability</h4>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/sustainability">Our Sustainability Goals</a>
            </li>
            <li className="footer-item">
              <a href="/naturerestoration">Nature Restoration</a>
            </li>
            <li className="footer-item">
              <a href="/codeofconduct">Supplier Code of Conduct</a>
            </li>
            <li className="footer-item">
              <a href="/electric">Supporting Electric Vehicles</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About Z</h4>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/ourstory">Our Story</a>
            </li>
            <li className="footer-item">
              <a href="/stand">What We Stand For</a>
            </li>
            <li className="footer-item">
              <a href="/people">Our People</a>
            </li>
            <li className="footer-item">
              <a href="/news">News</a>
            </li>
            <li className="footer-item">
              <a href="/careers">Careers at Z</a>
            </li>
            <li className="footer-item">
              <a href="/corporate">Corporate Centres</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-links">
          <li className="footer-item">
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li className="footer-item">
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li className="footer-item">
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className="footer-item">
            <a href="/sitemap">Sitemap</a>
          </li>
        </ul>
        <p className="footer-trademark">
          Z Energy Limited. All Trademarks are under license
        </p>
      </div>
    </footer>
  );
}

export default Footer;
