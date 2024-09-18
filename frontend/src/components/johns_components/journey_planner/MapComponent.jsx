import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [position, setPosition] = useState({ lat: 40.7128, lng: -74.0060 }); // Default position
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await fetch(`http://localhost:3000/map/geolocation?lat=${position.lat}&lng=${position.lng}`);
        const data = await response.json();

        if (data.status === 'OK') {
          setAddress(data.results[0].formatted_address); 
        } else {
          console.error('Geocoding error:', data.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAddress(); // Fetch address on component mount
  }, [position]); // Re-fetch if position changes

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {address ? address : 'Loading address...'}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;