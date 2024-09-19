import React, { useState } from "react";
import "./FindAStationDropdown.css"; // Assuming you have a CSS file for styling

export const serviceOptions = [
  { label: "Car Wash", options: ["Z2O Car Wash"] },
  {
    label: "Food & Drink",
    options: ["Pre-order Coffee", "Z Espress Coffee & Fresh Food", "f'real"],
  },
  {
    label: "EV Charging",
    options: ["Ultra-Fast", "Fast", "Fast &/or Ultra-Fast"],
  },
  {
    label: "Payment Option",
    options: ["Pay by Plate", "Pay by Card"],
  },
  {
    label: "Fueling & Maintenance Gear",
    options: ["Super Long Hoses", "Ad Blue Diesel Exhaust Fluid"],
  },
  {
    label: "Other",
    options: [
      "Trailer Hire",
      "LPG SWAP'nGO",
      "Bathrooms",
      "A-Z Screen",
      "Composable Cups",
      "ATM",
    ],
  },
];

function FindAStationDropdown() {
  const [category, setCategory] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [fuelType, setFuelType] = useState("");

  const handleClearFilters = () => {
    setCategory("");
    setDropdown2("");
    setFuelType("");
  };
  return (
    <div className="dropdown-container">
      <div className="dropdown-section">
        <p className="dropdown-description">Select a Service or Services</p>
        <select
          className="dropdown-button"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {serviceOptions.map((group, index) => (
            <optgroup key={index} label={group.label}>
              {group.options.map((option, idx) => (
                <option
                  key={idx}
                  value={`category${index + 1}-choice${idx + 1}`}
                >
                  {option}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
      <div className="dropdown-section">
        <p className="dropdown-description">Select Station Type</p>
        <select
          className="dropdown-button"
          value={dropdown2}
          onChange={(e) => setDropdown2(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="option1">Truck Stop</option>
          <option value="option2">Service Station</option>
        </select>
      </div>
      <div className="dropdown-section">
        <p className="dropdown-description">Select Fuel Type</p>
        <select
          className="dropdown-button"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="option1">ZX Premium</option>
          <option value="option2">Z91 Unleaded</option>
          <option value="option3">Z Diesel</option>
        </select>
      </div>
      <div className="actions">
        <button className="add-filters-button">Add Filters</button>
        <p className="clear-filters-paragraph" onClick={handleClearFilters}>
          Clear Filters
        </p>
      </div>
    </div>
  );
}

export default FindAStationDropdown;
