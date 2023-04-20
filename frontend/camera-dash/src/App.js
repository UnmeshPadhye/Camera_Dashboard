import logo from "./logo.svg";
import React, { useState } from 'react';
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import AlertsPage from "./components/alerts/alertsPage"
import Header from "./components/core/header";
import LoginSignup from "./components/core/login";
import MyProfile from "./components/users/myprofile";
import EditProfile from "./components/users/editprofile";
import ManageUsers from "./components/users/manageuser";
import Floormap from "./components/infra/floormap"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CameraDetails from "./components/cameras/cameradetails";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/login" element={<LoginSignup />} exact />
          <Route path="/home" element={<Dashboard />} exact />
          <Route path="/alerts" element={<AlertsPage />} exact />
          <Route path="/profile" element={<MyProfile />} exact />
          <Route path="/edit/profile" element={<EditProfile />} exact />
          <Route path="/edit/users" element={<ManageUsers />} exact />
          <Route path="/floor" element={<Floormap />} exact />
          <Route path="/cam-details/:id" element={<CameraDetails />} exact />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
