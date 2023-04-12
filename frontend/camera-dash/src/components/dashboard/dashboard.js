import React from "react";
import { Col, Row } from "react-bootstrap";
import CampusView from "../cards/campusview";
import FloorMap from "../cards/floormap";
import CameraSystem from "../cards/camerasys";
import ScheduleCamera from "../cards/schedulecam";
import AlertsAndNotifications from "../cards/alertnotify";
import DataStatistics from "../cards/datastats"
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <Row>
        <Col md={4} className="card-col">
          <CampusView />
        </Col>
        <Col md={4} className="card-col">
          <FloorMap />
        </Col>
        <Col md={4} className="card-col">
          <CameraSystem />
        </Col>

      </Row>
      <Row>
        <Col md={4} className="card-col">
          <ScheduleCamera />
        </Col>
        <Col md={4} className="card-col">
          <AlertsAndNotifications />
        </Col>
        <Col md={4} className="card-col">
          <DataStatistics />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
