import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/profile`; 
      navigate(path);
    }

  const [userProfile, setUserProfile] = useState({
    userProfilePic:
      localStorage.getItem("userProfilePic") ||
      "https://via.placeholder.com/150",
    name: localStorage.getItem("name") || "John Doe",
    contact: localStorage.getItem("contact") || "johndoe@example.com",
    address: localStorage.getItem("address") || "123 Main St, Anytown, USA",
    systemRoles: localStorage.getItem("systemRoles") || "Admin",
  });

  const { userProfilePic, name, contact, address, systemRoles } = userProfile;

  const handleChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfilePic", userProfilePic);
    localStorage.setItem("name", name);
    localStorage.setItem("contact", contact);
    localStorage.setItem("address", address);
    localStorage.setItem("systemRoles", systemRoles);
    routeChange()
  };

  return (
    <Card style={{width:'95%', margin: '0 auto', marginTop: '50px'}}>
      <Card.Header>
        <h3>Edit Profile</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={3}>
              <Card.Img variant="top" src={userProfilePic} />
              <Form.Group>
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  name="userProfilePic"
                  type="text"
                  value={userProfilePic}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
     
            <Col sm={9}>
              <Card>
                <Card.Header>
                  <h5>Contact Information</h5>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Form.Group>
                      <Form.Label>Contact</Form.Label>
                      <Form.Control
                        name="contact"
                        type="text"
                        value={contact}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        name="address"
                        type="text"
                        value={address}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
              <br></br>
              <Card>
                <Card.Header>
                  <h5>System Roles</h5>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Form.Group>
                      <Form.Label>Roles</Form.Label>
                      <Form.Control
                        name="systemRoles"
                        type="text"
                        value={systemRoles}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
              <br></br>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EditProfile;
