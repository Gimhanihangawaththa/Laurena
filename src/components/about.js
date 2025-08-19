import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import img1 from "../assests/images/img1.jpg";

function AppAbout() {
    
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Welcome to Laurena, where passion meets craftsmanship to create timeless jewellery that celebrates you.</p>
            <p>Founded with the dream of bringing beauty and elegance into everyday life, our shop offers a carefully curated collection of exquisite pieces crafted with love and precision. Whether you're looking for a delicate necklace, a stunning ring, or a statement bracelet, each creation reflects our commitment to quality, design, and individuality.</p>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;