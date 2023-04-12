import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";


function AlertsPage() {

    const [alerts, setAlerts] = useState([
        { severity: "High", time: "2023-04-11 12:45:30", message: "Camera 1: Motion detected" },
        { severity: "Medium", time: "2023-04-11 11:20:10", message: "Camera 3: Connection lost" },
        { severity: "Low", time: "2023-04-10 19:15:00", message: "Camera 2: Low battery" },
        { severity: "High", time: "2023-04-09 14:30:40", message: "Camera 5: Intrusion detected" },
        { severity: "Medium", time: "2023-04-08 08:10:20", message: "Camera 4: Firmware update available" },
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

    const clearNotifications = (notifications) => {
        setAlerts([]);
    };

    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Severity</th>
                        <th>Time</th>
                        <th>Message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {alerts.map((alert, index) => (
                        <tr key={index}>
                            <td>{alertBadge(alert.severity)}</td>
                            <td>{alert.time}</td>
                            <td>{alert.message}</td>
                            <td>
                                <Button class="btn btn-dark">Clear</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button className="btn btn-primary" onClick={() => clearNotifications(alerts)}>Clear all notifications</Button>
        </div>
    );
}

export default AlertsPage;