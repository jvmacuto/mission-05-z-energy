import React from "react";
import "./PaymentOptions.css"; // Import the updated styles

const PaymentOptions = () => {
  return (
    <div>
      {/* Line separating sections */}
      <hr className="paymentoptions-line" />

      <div className="promotional-section">
        {/* Pay in App Section */}
        <div className="promo-section">
          <h3>Pay in app</h3>
          <p>
            The easy, secure way to fuel up and go. No <br /> cash or cards to
            hand over.
          </p>
          <button className="promo-button">
            Download Z app{" "}
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 35 35"
                fill="none"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                <path
                  d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9H23V7H0V9Z"
                  fill="#ED560E"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Pre-order Coffee Section */}
        <div className="promo-section">
          <h3>Pre-order Coffee</h3>
          <p>
            Pre-order and pre-pay in your Z App using <br /> your debit or
            credit card.
          </p>
          <button className="promo-button">
            Download Z app{" "}
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 35 35"
                fill="none"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                <path
                  d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9H23V7H0V9Z"
                  fill="#ED560E"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* LPG SWAP'n'GO Section */}
        <div className="promo-section">
          <h3>LPG SWAP'n'GO</h3>
          <p>Fast, safe, and simple.</p>
          <button className="promo-button">
            Learn more{" "}
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 35 35"
                fill="none"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                <path
                  d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9H23V7H0V9Z"
                  fill="#ED560E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
