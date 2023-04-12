import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function FloorMap() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.sjsu.edu/map/pics/ADV_081221_North-campus_02_MAP_WEB.jpg"
    )
      .then((response) => setImage(response.url))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card>
      <Card.Header>Floor Map</Card.Header>
      {image && <Card.Img variant="top" src={image} alt="Campus View" style={{ height: "262px" }}/>}
      <Card.Body>
        <Button variant="primary" href="/campus">
          Floor Map
        </Button>
        <Card.Text>SJSU Floor Map</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FloorMap;
