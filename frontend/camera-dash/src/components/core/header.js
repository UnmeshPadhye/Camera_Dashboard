import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import './style/header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" className="ml-3">Campus Surveillance Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink className="nav-link" to="/" activeclassname="active">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" to="/cameras" activeclassname="active">Cameras</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" to="/settings" activeclassname="active">Settings</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" to="/data-recording" activeclassname="active">Recording</NavLink>
          </Nav.Item>

          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
