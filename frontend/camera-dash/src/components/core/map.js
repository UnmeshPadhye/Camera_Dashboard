import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from 'react-router-dom';


const Map = ({ building,  markers }) => {
  const {latitude, longitude, cam, msg} = building
  const [locationData, setLocationData] = useState([]);

  const markerIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconRetinaUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  // Load location data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem(`${latitude},${longitude}`)
    );
    if (storedData) {
      setLocationData(storedData);
    }
  }, [latitude, longitude]);

  // Save location data to local storage whenever it changes
  useEffect(() => {
    console.log(latitude);
    localStorage.setItem(
      `${latitude},${longitude}`,
      JSON.stringify(locationData)
    );
  }, [latitude, longitude, locationData]);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={19}
      scrollWheelZoom={false}
      style={{ height: "500px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker key={latitude} position={[latitude, longitude]} icon={markerIcon}>
        <Popup>
          {`Camera at ${msg}`} <br />
          <Link to={`/cam-details/${cam}`} >More Details</Link>{" "}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
