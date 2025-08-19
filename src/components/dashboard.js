import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";


// Sample data for Pie Chart
const orderData = [
  { name: "Completed", value: 60 },
  { name: "In Progress", value: 30 },
  { name: "Pending", value: 10 },
];

const COLORS = ["#4caf50", "#ffc107", "#f44336"];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container fluid>
        {/* Top Bar */}
        <div className="top-bar">
          <h4>Welcome back, Alex👋</h4>
          
        </div>

        {/* Stat Cards */}
        <Row>
          <Col md={4}>
            <Card className="stat-card">
              <Card.Body>
                <h5>Total Orders</h5>
                <h3>120</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="stat-card">
              <Card.Body>
                <h5>Revenue</h5>
                <h3>$4,250</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="stat-card">
              <Card.Body>
                <h5>Customers</h5>
                <h3>85</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          {/* Recent Activity */}
          <Col md={6}>
            <div className="recent-activity">
              <h5>Recent Activity</h5>
              <Card className="completed">
                <Card.Body>
                  <p>Order #1023 completed successfully</p>
                  <small>2 hours ago</small>
                </Card.Body>
              </Card>
              <Card className="in-progress">
                <Card.Body>
                  <p>Order #1018 in progress</p>
                  <small>5 hours ago</small>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Order Status Pie Chart */}
          <Col md={6}>
            <div className="order-status">
              <h5>Order Status</h5>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={orderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {orderData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="legend">
                <span style={{ color: "#4caf50" }}>● Completed</span>
                <span style={{ color: "#ffc107" }}>● In Progress</span>
                <span style={{ color: "#f44336" }}>● Pending</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Buttons */}
        <Row className="mt-4 bottom-buttons text-center">
          <Col>
            <Button>View More</Button>
            <Button>Generate Report</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
