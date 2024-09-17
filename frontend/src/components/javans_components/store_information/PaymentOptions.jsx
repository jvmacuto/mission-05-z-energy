import React from "react";

const PaymentOptions = ({ paymentMethods }) => {
  return (
    <div className="payment-options">
      <h3>Payment Options</h3>
      <ul>
        {paymentMethods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentOptions;
