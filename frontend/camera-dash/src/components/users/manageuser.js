import React, { useState, useEffect } from "react";
import { Card, Form, Button, Table } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";

const ManageUsers = () => {
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [userRequests, setUserRequests] = useState(
    // JSON.parse(localStorage.getItem('userRequests')) ||
    [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        role: "user",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "user",
      },
      {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        role: "user",
      },
    ]
  );
  //   const [allUsers, setAllUsers] = useState(
  //     JSON.parse(localStorage.getItem('allUsers')) || []
  //   );

  const [allUsers, setAllUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "user",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "admin",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: "user",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("userRequests", JSON.stringify(userRequests));
  }, [userRequests]);

  useEffect(() => {
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }, [allUsers]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    const newUserRequest = { id: userRequests.length + 1, ...newUser };
    setUserRequests((prevState) => [...prevState, newUserRequest]);
    setAllUsers((prevState) => [...prevState, newUserRequest]);
    setNewUser({ name: "", email: "", role: "" });
  };

  const handleAssignRole = (id, newRole) => {
    setUserRequests((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
    setAllUsers((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  const handleApproveUserRequest = (id, role) => {
    // Find the user request in the userRequests array by its ID
    const userRequest = userRequests.find((user) => user.id === id);

    // Remove the user request from the userRequests array
    setUserRequests((prevUserRequests) =>
      prevUserRequests.filter((user) => user.id !== id)
    );

    // Add the new user to the allUsers array with the specified role
    setAllUsers((prevAllUsers) => [
      ...prevAllUsers,
      {
        id: userRequest.id,
        name: userRequest.name,
        email: userRequest.email,
        role: role,
      },
    ]);

    // Save the updated allUsers array to local storage
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  };
  const [key, setKey] = useState("addUser");

  return (
    <>
      <Card style={{width:'95%', margin: '0 auto', marginTop: '50px'}}>
        <Card.Header><h3>Manage Users</h3></Card.Header>
        <Card.Body>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="addUser" title="Add User">
              <Form onSubmit={handleAddUser}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="role">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    as="select"
                    name="role"
                    placeholder="Role"
                    value={newUser.role}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a role...</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </Form.Control>
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">
                  Add User
                </Button>
              </Form>

              <br></br>
            </Tab>
            <Tab eventKey="userRequests" title="User Requests">
              <h4>User Request</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userRequests.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <Form.Control
                          as="select"
                          value={user.role}
                          onChange={(event) =>
                            handleAssignRole(user.id, event.target.value)
                          }
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </Form.Control>
                      </td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() =>
                            handleApproveUserRequest(user.id, user.role)
                          }
                        >
                          Add
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="allUsers" title="All Users">
              <h4>All Users</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
};

export default ManageUsers;
