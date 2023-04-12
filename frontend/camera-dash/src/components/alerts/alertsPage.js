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

    // To clear all Notifications (alerts)
    const clearNotifications = (notifications) => {
        setAlerts([]);
    };

    // To remove a notification at the specified index. Triggered when you click "Clear" button next to specified notification.
    const clearNotification = (index, alerts) => {
        const updatedAlerts = [...alerts];
        updatedAlerts.splice(index, 1);
        setAlerts(updatedAlerts);
    };

    return (
        <div className="container">
            {alerts.length > 0 ? (
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
                                    <Button className="btn btn-secondary" onClick={() => clearNotification(index, alerts)}>Clear</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No Alerts or notifications</p>
            )}
            <Button
                className="btn btn-dark"
                onClick={clearNotifications}
                disabled={alerts.length === 0}
            >
                Clear all Alerts
            </Button>
        </div>
    );
}

export default AlertsPage;