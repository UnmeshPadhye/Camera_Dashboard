import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const MyProfile = () => {
  // const [userProfile, setUserProfile] = useState({});

  // useEffect(() => {
  //     fetch('https://example.com/api/userprofile')
  //     .then(response => response.json())
  //     .then(data => setUserProfile(data));
  // }, []);

  // const { userProfilePic, name, contact, address, systemRoles, bio, website, education, workExperience } = userProfile;

  //   const userProfile = {
  //     userProfilePic: 'https://via.placeholder.com/150',
  //     name: 'John Doe',
  //     contact: 'johndoe@example.com',
  //     address: '123 Main St, Anytown, USA',
  //     systemRoles: 'Admin',
  //     bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nam convallis fermentum est, non feugiat lectus auctor vitae. Vivamus varius vitae nulla eu blandit. Nulla facilisi.',
  //     website: 'johndoe.com',
  //     education: 'Bachelor of Science in Computer Science',
  //     workExperience: 'Campus Security Officer at SJSU.'
  //   };

  const [userProfile, setUserProfile] = useState({
    userProfilePic:
      localStorage.getItem("userProfilePic") ||
      "https://static.vecteezy.com/system/resources/previews/007/468/569/original/colorful-simple-flat-of-security-guard-icon-or-symbol-people-concept-illustration-vector.jpg",
    name: localStorage.getItem("name") || "John Doe",
    contact: localStorage.getItem("contact") || "johndoe@example.com",
    address: localStorage.getItem("address") || "123 Main St, Anytown, USA",
    systemRoles: localStorage.getItem("systemRoles") || "Admin",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nam convallis fermentum est, non feugiat lectus auctor vitae. Vivamus varius vitae nulla eu blandit. Nulla facilisi.",
    website: "+16692831234",
    education: "Showdoen Labs",
    workExperience: "Campus Security Officer at SJSU.",
  });

  localStorage.setItem("surv_user", userProfile);

  const {
    userProfilePic,
    name,
    contact,
    address,
    systemRoles,
    bio,
    website,
    education,
    workExperience,
  } = userProfile;

  return (
    <Card style={{width:'95%', margin: '0 auto', marginTop: '50px'}}>
      <Card.Header>
        <h3>My Profile</h3>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm={3}>
            <Card.Img variant="top" src={userProfilePic} />
          </Col>
          <Col sm={9}>
            <Card>
              <Card.Header>
                <h5>Contact Information</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{name}</ListGroup.Item>
                <ListGroup.Item>{contact}</ListGroup.Item>
                <ListGroup.Item>{address}</ListGroup.Item>
                <ListGroup.Item>{website}</ListGroup.Item>
              </ListGroup>
            </Card>
            <br></br>
            <Card>
              <Card.Header>
                <h5>System Roles</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{systemRoles}</ListGroup.Item>
              </ListGroup>
            </Card>
            <br></br>

            
          </Col>
        </Row>
      </Card.Body>
      <Link to="/edit/profile">
        <button className="btn btn-primary">Edit</button>
      </Link>
      <br></br>
    </Card>
  );
};

export default MyProfile;
