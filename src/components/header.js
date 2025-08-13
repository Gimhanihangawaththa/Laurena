import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function AppHeader(){
    return(
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Laurena</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
             <Nav.Link href="#categories">Categories</Nav.Link>
             <Nav.Link href="#collection">Collection</Nav.Link>
            <Nav.Link href="#newarrivals">New Arrivals</Nav.Link>
             <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
           
           
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}