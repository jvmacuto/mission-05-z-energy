import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faLocationArrow } from '@fortawesome/free-solid-svg-icons';



const SearchInput = () => {
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [startingSuggestions, setStartingSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const handleStartingPointChange = (e) => {
    setStartingPoint(e.target.value);
    // Implement logic to fetch and update startingSuggestions based on input
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    // Implement logic to fetch and update destinationSuggestions based on input
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Handle search action when Enter key is pressed
      // Example:
      // performSearch(startingPoint, destination);
    }
  };

   const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Handle success: set startingPoint with user's current location
          const { latitude, longitude } = position.coords;
          setStartingPoint(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // You might need to format the coordinates for your specific use case
        },
        (error) => {
          // Handle error if geolocation is not available
          console.error("Error getting location:", error);
        }
      );
    } else {
      // Handle the case where geolocation is not supported
      console.error("Geolocation is not supported by this browser.");
    }
  };


  return (
    <div className="search-input">
      <div className="input-group">
        <label htmlFor="starting-point">Starting Point:</label>
        <input
          type="text"
          id="starting-point"
          placeholder="Enter your starting location"
          value={startingPoint}
          onChange={handleStartingPointChange}
          onKeyDown={handleKeyDown}
        />
        <a href="#" onClick={handleUseCurrentLocation} className="current-location-link">
          <FontAwesomeIcon icon={faLocationArrow} /> Use Current Location
        </a>
        {/* Optional: Render starting suggestions dropdown if startingSuggestions.length > 0 */}
        {startingSuggestions.length > 0 && (
          <ul className="suggestions">
            {startingSuggestions.map((suggestion) => (
              <li key={suggestion.id}>
                {suggestion.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="input-group">
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          placeholder="Enter your destination"
          value={destination}
          onChange={handleDestinationChange}
          onKeyDown={handleKeyDown}
        />
        {/* Optional: Render destination suggestions dropdown if destinationSuggestions.length > 0 */}
        {destinationSuggestions.length > 0 && (
          <ul className="suggestions">
            {destinationSuggestions.map((suggestion) => (
              <li key={suggestion.id}>
                {suggestion.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button type="button" className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      
    </div>
  );
};

export default SearchInput;