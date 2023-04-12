import React, { useState, useEffect } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";

function DataStatistics() {
  // const [dataStats, setDataStats] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.example.com/data-stats")
  //     .then((response) => response.json())
  //     .then((data) => setDataStats(data))
  //     .catch((error) => console.error(error));
  // }, []);

  const dataStats = {
    totalStorage: "100 GB",
    usedStorage: "25 GB",
    availableStorage: "75 GB",
    recordingTime: "15 hours",
    recordingQuality: "HD",
  };

  return (
    <Card>
      <Card.Header>Data Statistics</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          Total Storage: {dataStats.totalStorage}
        </ListGroup.Item>
        <ListGroup.Item>Used Storage: {dataStats.usedStorage}</ListGroup.Item>
        <ListGroup.Item>
          Available Storage: {dataStats.availableStorage}
        </ListGroup.Item>
        <ListGroup.Item>
          Recording Time: {dataStats.recordingTime}
        </ListGroup.Item>
        <ListGroup.Item>
          Recording Quality: {dataStats.recordingQuality}
        </ListGroup.Item>
      </ListGroup>
 

      <Card.Body>
      <Button variant="primary" href="/data-recording">
          Data Recording
        </Button>
        </Card.Body>
      <Card.Footer className="text-muted">
        Last updated 3 mins ago
      </Card.Footer>
    </Card>
  );
}

export default DataStatistics;
