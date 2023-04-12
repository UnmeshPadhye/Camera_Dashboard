import React, { useState, useEffect } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

function ScheduleCamera() {
  const [cameraData, setCameraData] = useState([]);

  useEffect(() => {
    // Placeholder for API call to fetch camera schedules data
    const data = [
      { cameraName: 'Camera 1', schedule: 'Monday-Friday 8am-5pm' },
      { cameraName: 'Camera 2', schedule: 'Monday-Friday 9am-6pm' },
      { cameraName: 'Camera 3', schedule: 'Monday-Friday 10am-7pm' },
    ];
    setCameraData(data);
  }, []);

  return (
    <Card>
      <Card.Header>Schedule Camera</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Camera Name</th>
              <th>Schedule</th>
            </tr>
          </thead>
          <tbody>
            {cameraData.map((camera) => (
              <tr key={camera.cameraName}>
                <td>{camera.cameraName}</td>
                <td>{camera.schedule}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" href="/schedule-camera">Schedule Camera</Button>
      </Card.Body>
    </Card>
  );
}

export default ScheduleCamera;
