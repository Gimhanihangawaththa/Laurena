import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <Container fluid>
        <h4>Welcome back, Admin 👑</h4>

        <Row className="mt-3">
          <Col md={6}>
            <Card>
              <Card.Body>
                <h5>User Management</h5>
                <p>View, edit, and remove users.</p>
                <Button variant="primary">Manage Users</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <h5>Product Management</h5>
                <p>Add, update, or delete products.</p>
                <Button variant="success">Manage Products</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <h5>Reports</h5>
                <p>Generate detailed system reports.</p>
                <Button variant="warning">Generate Report</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <h5>Settings</h5>
                <p>Update roles, permissions, and preferences.</p>
                <Button variant="danger">System Settings</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;
