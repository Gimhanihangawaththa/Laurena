import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './dashboard';
import Login from './login';
import Signup from './signup';

function AppHeader() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Switch from Login → Signup
  const handleShowSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  // Switch from Signup → Login
  const handleShowLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Laurena</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#collection">Collection</Nav.Link>
              <Nav.Link href="#newarrivals">New Arrivals</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={() => setShowProfile(true)}>
                <i className="bi bi-person-circle" style={{ fontSize: '1rem' }}></i>
              </Nav.Link>
              <Nav.Link onClick={() => setShowLogin(true)}>
                <i className="bi bi-box-arrow-in-right" style={{ fontSize: '1rem' }}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile Modal */}
      <Modal show={showProfile} onHide={() => setShowProfile(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dashboard />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowProfile(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login onSignupClick={handleShowSignup} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogin(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup onLoginClick={handleShowLogin} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSignup(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AppHeader;
