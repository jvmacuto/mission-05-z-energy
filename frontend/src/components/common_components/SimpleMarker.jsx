import React, { useState, useEffect, useRef } from 'react';

const SimpleMarker = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Fetch the Google Maps API script from the backend
    fetch('http://localhost:3000/api/initmap')
      .then(response => response.text())
      .then(scriptUrl => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        document.body.appendChild(script);

        // Set scriptLoaded to true when the script is fully loaded
        script.onload = () => {
          setScriptLoaded(true);
        };
      })
      .catch(error => console.error('Error fetching script URL:', error));

    // Clean up the script when the component unmounts
    return () => {
      const script = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded && mapRef.current) {
      // Initialize the map after the script is loaded
      const mapOptions = {
        center: { lat: -41.2865, lng: 174.773015 },
        zoom: 4,
      };
      const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
      setMap(newMap);
    }
  }, [scriptLoaded, mapRef]);

  useEffect(() => {
    if (map) {
      // Add the marker to the map
      const marker = new window.google.maps.Marker({
        position: { lat: -41.2865, lng: 174.773015 },
        map,
        title: 'My Location',
      });
    }
  }, [map]);

  return (
    <div style={{ height: '100%', margin: 0, padding: 0 }}>
      <div ref={mapRef} style={{ height: '100%' }} />
    </div>
  );
};

export default SimpleMarker;