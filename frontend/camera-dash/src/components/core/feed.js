import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";

function useBlinker(interval) {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsOn((isOn) => !isOn);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return isOn;
}

function CameraFeed({ id }) {
  const videoUrl =
    "https://www.youtube.com/watch?v=U7HRKjlXK-Y&ab_channel=Supercircuits"; // replace with actual video URL
  const isBlinking = useBlinker(500); // blink every 500 milliseconds

  return (
    <Card>
      <Card.Body>
        <Card.Title>Live Feed from Camera {id}</Card.Title>
        <div style={{ position: "relative" }}>
          <ReactPlayer url={videoUrl} playing />
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isBlinking && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}
                >
                  Live
                </span>
                <div
                  style={{
                    marginLeft: "10px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CameraFeed;
