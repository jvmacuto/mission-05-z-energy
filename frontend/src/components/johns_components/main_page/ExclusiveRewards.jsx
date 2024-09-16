import React from "react";
import "./ExclusiveRewards.css";

function ExclusiveRewards() {
  return (
    <div className="exclusive-rewards-container">
      <div className="exclusive-text-container">
        <h2>Go check our app and earn exclusive rewards!</h2>
        <p>
          Receive exclusive rewards when you invite your friends to download and
          use the Z app!
        </p>
        <button>Find Out More</button>
      </div>
      <div className="image-container">
        <img src="path/to/your/image.jpg" alt="Exclusive Rewards" />
      </div>
    </div>
  );
}

export default ExclusiveRewards;
