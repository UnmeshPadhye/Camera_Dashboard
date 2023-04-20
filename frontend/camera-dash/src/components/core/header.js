import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import LogoutButton from "../core/logout";
import "./style/header.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this state based on whether user is logged in or not
  const [issurv_username, setsurv_username] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const surv_username = localStorage.getItem("surv_username");

    if (token) {
      setIsLoggedIn(true);
      setsurv_username(surv_username);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  function handleLogoutClick() {
    // Perform logout actions here
    localStorage.removeItem("token");
    localStorage.removeItem("surv_username");
    window.location.href = "/login";
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/home" className="ml-3">
          Campus Surveillance Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          {isLoggedIn && ( // Show these options only if user is logged in
            <Nav className="ml-auto">
              <Nav.Item>
                <NavLink
                  className="nav-link"
                  to="/home"
                  activeclassname="active"
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  className="nav-link"
                  to="/cameras"
                  activeclassname="active"
                >
                  Cameras
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  className="nav-link"
                  to="/settings"
                  activeclassname="active"
                >
                  Settings
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  className="nav-link"
                  to="/data-recording"
                  activeclassname="active"
                >
                  Recording
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  className="nav-link"
                  to="/alerts"
                  activeclassname="active"
                >
                  Alerts
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink
                  className="nav-link"
                  to="/profile"
                  activeclassname="active"
                >
                  My Profile
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink
                  className="nav-link"
                  to="/edit/users"
                  activeclassname="active"
                >
                  Users
                </NavLink>
              </Nav.Item>


    

              <Nav.Item>
                {isLoggedIn && (
                  <LogoutButton
                    style={{ marginLeft: "10px" }}
                    onClick={handleLogoutClick}
                  />
                )}
              </Nav.Item>
            </Nav>
          )}
          {/* {!isLoggedIn && ( // Show this option only if user is not logged in
            <Nav className="ml-auto">
              <Nav.Item>
                <NavLink
                  className="nav-link"
                  to="/login"
                  activeclassname="active"
                >
                  Login
                </NavLink>
              </Nav.Item>
            </Nav>
          )} */}
        </Navbar.Collapse>
      </Navbar>
      <div>
        {isLoggedIn && (
          <h2 style={{ color: "black" }}>Welcome, {issurv_username}</h2>
        )}
      </div>
    </>
  );
}

export default Header;
