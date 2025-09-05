
import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";



function AppHeader({ user, onLogout }) {
  
  const navigate = useNavigate();

  return (
    
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">Laurena</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#collection">Collection</Nav.Link>
              <Nav.Link href="#newarrivals">New Arrivals</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              
            </Nav>
            
             <Nav>
            {user ? (
              <NavDropdown
                title={
                  <>
                    <i
                      className="bi bi-person-circle"
                      style={{ fontSize: "1rem", marginRight: "6px" }}
                    ></i>
                    {user.name}
                  </>
                }
                id="user-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item onClick={() => navigate("/admin")}>
                  <i className="bi bi-gear"></i> Admin Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={onLogout}>
                  <i className="bi bi-box-arrow-right"></i> Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link onClick={() => navigate("/login")}>
                <i className="bi bi-box-arrow-in-right"></i> Login
              </Nav.Link>
            )}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    
  );
}

export default AppHeader;
