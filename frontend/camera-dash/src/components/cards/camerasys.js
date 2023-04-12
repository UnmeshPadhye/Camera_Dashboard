import React, { useState, useEffect } from "react";
import { Card, Table, Button } from "react-bootstrap";

function CameraSystem() {
  const [cameras, setCameras] = useState([
    { name: "Camera 1", status: "Online" },
    { name: "Camera 2", status: "Offline" },
    { name: "Camera 3", status: "Online" },
    { name: "Camera 4", status: "Online" },
    { name: "Camera 5", status: "Offline" },
  ]);

  //const [cameras, setCameras] = useState([]);

  //   useEffect(() => {
  //     fetch('https://api.example.com/cameras')
  //       .then(response => response.json())
  //       .then(data => setCameras(data))
  //       .catch(error => console.error(error));
  //   }, []);

  return (
    <Card>
      <Card.Header>Camera System</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Camera Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cameras.map((camera) => (
              <tr key={camera.name}>
                <td>{camera.name}</td>
                <td>
                  {camera.status === "Online" ? (
                    <span style={{ color: "green" }}>
                      <i className="fas fa-check-circle"></i> Online
                    </span>
                  ) : (
                    <span style={{ color: "red" }}>
                      <i className="fas fa-times-circle"></i> Offline
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" href="/campus">
          Camera System
        </Button>
        <Card.Text>SJSU Camera System</Card.Text>
      </Card.Body>
      
    </Card>
  );
}

export default CameraSystem;
