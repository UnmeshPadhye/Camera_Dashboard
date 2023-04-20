import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Card, Form } from 'react-bootstrap';
import Map from '../core/map';

const Floormap = () => {
  // Define initial state for building selection and location data
  const [building, setBuilding] = useState('Building A');
  const [locationData, setLocationData] = useState([]);

  // Define options for dropdown menu
  const buildingOptions = ['Building A', 'Building B', 'Building C'];

  // Define location data for each building
  const locationMap = {
    'Building A': {
      latitude: 37.3370,
      longitude: -121.8814,
      cam: 'a1',
      msg: ''
    },
    'Building B': {
      latitude: 37.3371689,
      longitude: -121.8791459,
      cam: 'b1',
      msg: ''
    },
    'Building C': {
      latitude: 37.33644,
      longitude: -121.8814,
      cam: 'c1',
      msg: ''
    },
  };

  const markers = [
    { lat: 37.3370, lng:-121.8814 },
    { lat: 37.7858, lng: -122.4064 },
    { lat: 37.7979, lng: -122.4011 },
  ];

  // Define custom marker icon
  const markerIcon = new L.Icon({
    iconUrl: 'marker-icon.png',
    iconRetinaUrl: 'marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  
  // Load location data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(building));
    if (storedData) {
      setLocationData(storedData);
    }
  }, [building]);

  // Save location data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(building, JSON.stringify(locationData));
  }, [building, locationData]);

  // Update map center with new location data when building is changed
  useEffect(() => {
    setLocationData([]);
  }, [building]);

  return (
    <div>
      <Card style={{ width: '50%', margin: 'auto', marginTop: '20px' }}>
        <Card.Header>Select Building</Card.Header>
        <Card.Body>
          <Form.Control
            as="select"
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
          >
            {buildingOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Control>
        </Card.Body>
      </Card>
      {building && (
        <Card style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
          <Map building={locationMap[building]} markers={markers[0]} />
        </Card>
      )}
    </div>
  );
            }
  export default Floormap;