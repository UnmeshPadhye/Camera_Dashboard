import React, { useState } from "react";
import { Card, Table, Button, NavLink } from "react-bootstrap";
import { Navigate, useNavigate, Link } from "react-router-dom"

function AlertsAndNotifications() {
  //const [alerts, setAlerts] = useState([]);

  //   useEffect(() => {
  //     fetch('https://api.example.com/alerts')
  //       .then(response => response.json())
  //       .then(data => setAlerts(data))
  //       .catch(error => console.error(error));
  //   }, []);

  const [alerts, setAlerts] = useState([
    { severity: "High", time: "2023-04-11 12:45:30", message: "Camera 1: Motion detected" },
    { severity: "Medium", time: "2023-04-11 11:20:10", message: "Camera 3: Connection lost" },
    { severity: "Low", time: "2023-04-10 19:15:00", message: "Camera 2: Low battery" },
  ]);

  const alertBadge = (severity) => {
    let badgeVariant = "";
    switch (severity) {
      case "High":
        badgeVariant = "danger";
        break;
      case "Medium":
        badgeVariant = "warning";
        break;
      case "Low":
        badgeVariant = "info";
        break;
      default:
        badgeVariant = "secondary";
    }
    return <span className={`badge bg-${badgeVariant}`}>{severity}</span>;
  };

  const showAlerts = (alerts) => {
    <NavLink to="/alerts"></NavLink>
  }

  return (
    <Card>
      <Card.Header>Alerts and Notifications</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Severity</th>
              <th>Time</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr key={index}>
                <td>{alertBadge(alert.severity)}</td>
                <td>{alert.time}</td>
                <td>{alert.message}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Link to="/alerts" className="btn btn-primary">Alerts</Link>

        <Card.Text>SJSU Camera System</Card.Text>
      </Card.Body>
    </Card >
  );
}

export default AlertsAndNotifications;
