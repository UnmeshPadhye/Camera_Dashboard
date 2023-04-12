import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function CampusView() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.sjsu.edu/_images/buildings/ADV_aerial-view_dorms-beyond_01.jpg"
    )
      .then((response) => setImage(response.url))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card>
      <Card.Header>Campus View</Card.Header>
      {image && <Card.Img variant="top" src={image} alt="Campus View" style={{ height: "262px" }}/>}
      <Card.Body>
        <Button variant="primary" href="/campus">
          Campus
        </Button>
        <Card.Text>SJSU Campus</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CampusView;
