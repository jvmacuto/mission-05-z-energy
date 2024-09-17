import React from "react";
import "./Footer.css"; // Import footer-specific styles

const Footer = () => {
  return (
    <>
      {/* Move the line here, above the footer container */}
      <hr className="footer-line" />

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Products & Services</h3>
            <ul>
              <li>
                <a href="#">At the station</a>
              </li>
              <li>
                <a href="#">Z App</a>
              </li>
              <li>
                <a href="#">Power your home with Z</a>
              </li>
              <li>
                <a href="#">Rewards & Promotions</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>For Businesses</h3>
            <ul>
              <li>
                <a href="#">Z Business Fuel Card</a>
              </li>
              <li>
                <a href="#">Fuels & Services</a>
              </li>
              <li>
                <a href="#">Business Tips & Stories</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Sustainability</h3>
            <ul>
              <li>
                <a href="#">Our Sustainability Goals</a>
              </li>
              <li>
                <a href="#">Nature Restoration</a>
              </li>
              <li>
                <a href="#">Supplier Code of Conduct</a>
              </li>
              <li>
                <a href="#">Supporting Electric Vehicles</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About Z</h3>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">What We Stand For</a>
              </li>
              <li>
                <a href="#">Our People</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Careers at Z</a>
              </li>
              <li>
                <a href="#">Corporate Centres</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact-section">
            <div className="contact-us-button">Contact us</div>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 1C13.4087 1 11.8826 1.63214 10.7574 2.75736C9.63214 3.88258 9 5.4087 9 7V9H7C6.44772 9 6 9.44772 6 10V14C6 14.5523 6.44772 15 7 15H9V22C9 22.5523 9.44772 23 10 23H14C14.5523 23 15 22.5523 15 22V15H17C17.4589 15 17.8589 14.6877 17.9701 14.2425L18.9701 10.2425C19.0448 9.94379 18.9777 9.6273 18.7882 9.38459C18.5987 9.14187 18.3079 9 18 9H15V7H18C18.5523 7 19 6.55228 19 6V2C19 1.44772 18.5523 1 18 1H15Z"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.74037 7.51861C10.6739 7.03424 11.7363 6.85655 12.7766 7.01081C13.8378 7.16817 14.8202 7.66264 15.5788 8.4212C16.3373 9.17975 16.8318 10.1622 16.9891 11.2233C17.1434 12.2636 16.9657 13.3261 16.4813 14.2596C15.997 15.1931 15.2306 15.9501 14.2912 16.4229C13.3518 16.8957 12.2872 17.0603 11.2489 16.8932C10.2105 16.7261 9.25134 16.2359 8.50768 15.4923C7.76403 14.7486 7.2738 13.7894 7.10672 12.7511C6.93964 11.7128 7.10422 10.6482 7.57704 9.70878C8.04987 8.76938 8.80687 8.00299 9.74037 7.51861Z"
                  />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.74037 7.51861C10.6739 7.03424 11.7363 6.85655 12.7766 7.01081C13.8378 7.16817 14.8202 7.66264 15.5788 8.4212C16.3373 9.17975 16.8318 10.1622 16.9891 11.2233C17.1434 12.2636 16.9657 13.3261 16.4813 14.2596C15.997 15.1931 15.2306 15.9501 14.2912 16.4229C13.3518 16.8957 12.2872 17.0603 11.2489 16.8932C10.2105 16.7261 9.25134 16.2359 8.50768 15.4923C7.76403 14.7486 7.2738 13.7894 7.10672 12.7511C6.93964 11.7128 7.10422 10.6482 7.57704 9.70878C8.04987 8.76938 8.80687 8.00299 9.74037 7.51861Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer links and copyright */}
        <div className="footer-links-bottom">
          <a href="#">Privacy</a>
          <a href="#">Terms of use</a>
          <a href="#">Fuel Safety Data Sheets</a>
          <a href="#">Investor Relations</a>
          <p>
            &copy; 2024 Z Energy Limited. All trademarks are used under license.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
