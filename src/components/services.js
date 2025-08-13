import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-gem',
    title: 'Custom AI Jewellery Design',
    description: 'Share your dream jewellery design through a simple description, and our AI-powered tool will bring your vision to life with stunning concept images before crafting it into reality.'
  },
  {
    id: 2,
    icon: 'fas fa-ring',
    title: 'Personalised Creations',
    description: 'From engagement rings to heirloom necklaces, we handcraft each piece to match your unique style, story, and occasion.'
  },
  {
    id: 3,
    icon: 'fas fa-calendar-check',
    title: 'Virtual & In-Store Appointments',
    description: 'Book a one-on-one consultation online or in-store to explore designs, discuss customizations, and receive expert guidance.'
  },
  {
    id: 4,
    icon: 'fas fa-sync-alt',
    title: 'Jewellery Redesign & Restoration',
    description: 'Give your old treasures a new life — we restore, modify, or completely redesign your existing jewellery into something timeless.'
  },
  {
    id: 5,
    icon: 'fas fa-crown',
    title: 'Exclusive Limited Collections',
    description: 'Discover our handpicked seasonal collections featuring rare gemstones and unique designs, available for a limited time only.'
  },
  {
    id: 6,
    icon: 'fas fa-hands-helping',
    title: 'Lifetime Care & Cleaning',
    description: 'Enjoy free jewellery cleaning and maintenance services to keep your precious pieces shining forever.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;