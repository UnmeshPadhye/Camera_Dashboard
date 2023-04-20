import { useState } from "react";
import { Card, Button, Form, Modal } from "react-bootstrap";
import CameraFeed from "../core/feed"

const mockCameraData = {
  id: "1234",
  location: "Charles W. Davidson College of Engineering",
  status: "online",
  lastSeen: "2023-04-15T10:30:00.000Z",
  resolution: "720p"
};

function CameraDetails({ id }) {
  // Define state variables for camera details and settings
  const [camera, setCamera] = useState(mockCameraData);
  const [name, setName] = useState("");
  const [resolution, setResolution] = useState("");
  const [showCameraFeed, setShowCameraFeed] = useState(false);

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to update camera settings via API
  };

  // Handle opening and closing of CameraFeed modal
  const handleOpenCameraFeed = () => {
    setShowCameraFeed(true);
  };

  const handleCloseCameraFeed = () => {
    setShowCameraFeed(false);
  };

  return (
    <Card style={{ width: '50%', margin: 'auto', marginTop: '20px' }}>
      <Card.Body>
        <Card.Title>Camera {id}</Card.Title>
        <Card.Text>
          <p>Location: {camera.location}</p>
          {camera.status === "online" ? (
            <p>
              Status: <span style={{ color: "green" }}>Online</span>
            </p>
          ) : (
            <p>
              Status: <span style={{ color: "red" }}>Offline</span>
            </p>
          )}
          <p>Resolution: {camera.resolution}</p>
          <p>Last seen: {camera.lastSeen}</p>
        </Card.Text>
        <Button variant="primary" onClick={handleOpenCameraFeed}>
          View Live Feed
        </Button>
      </Card.Body>
      {/* <Card.Footer>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Camera Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter camera name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Resolution</Form.Label>
            <Form.Control
              as="select"
              value={resolution}
              onChange={(event) => setResolution(event.target.value)}
            >
              <option>720p</option>
              <option>1080p</option>
              <option>4K</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Settings
          </Button>
        </Form>
      </Card.Footer> */}

      {/* CameraFeed modal */}
      <Modal show={showCameraFeed} onHide={handleCloseCameraFeed} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Camera {id} Live Feed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CameraFeed />
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default CameraDetails;
