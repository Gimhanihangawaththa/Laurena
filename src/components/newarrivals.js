import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const newarrivalsData = [
  {
    id: 1,
    image: require('../assests/images/team1.jpg'),
    name: 'Diamond Drop Necklace',
    description:'Single 0.5ct brilliant-cut diamond on an 18K white gold chain, GIA-certified for quality.',
  },
  
  {
    id: 2,
    image: require('../assests/images/team2.jpg'),
    name: 'Celestial Star Ring',
    description:'South Sea pearls (10mm) mounted on sterling silver hooks, perfect for formal wear.',
  },
  {
    id: 3,
    image: require('../assests/images/team3.jpg'),
    name: 'Vintage Gold Band',
    description:'Sterling silver chain bracelet with five detachable charms, adjustable length.'
  },
  {
    id: 4,
    image: require('../assests/images/team4.jpg'),
    name: 'Emerald Royal Necklace',
    description:'Crafted from natural freshwater pearls, each hand-picked for luster, set on a 14K gold chain.'
  },
  {
    id: 5,
    image: require("../assests/images/team5.jpg"),
    name: 'Sapphire Promise Bangle',
     description:'Intricate hand-carved 22K gold design, lightweight but sturdy.'
  },
  {
    id: 6,
    image: require('../assests/images/team6.jpg'), 
    name: 'Princess Cut Ring',
    description:'Medium-sized 14K gold hoops with secure hinged clasp, polished to a mirror finish.',
  },
  {
    id: 7,
    image: require('../assests/images/team7.jpg'),
    name: 'Sapphire Teardrop Earrings',
   description:'14K rose gold infinity band featuring 20 micro-pavé diamonds (total 0.3ct).'
  },
  {
    id: 8,
    image: require('../assests/images/team8.jpg'),
    name: 'Minimalist Stud Earrings',
    description:' Smooth 22K solid gold band, 3mm width, perfect for everyday wear.'
  }
]

function AppNewarrivals() {
  return (
    <section id="newarrivals" className="block newarrivals-block">
      <Container fluid>
        <div className="title-holder">
          <h2> New Arrivals</h2>
        </div>
        <Row>
          {
             newarrivalsData.map( newarrivals => {
              return (
                <Col sm={3} key={ newarrivals.id}>
                  <div className='image'>
                    <Image src={ newarrivals.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          
                                           <p>{ newarrivals.description}</p>  
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{ newarrivals.name}</h3>
                    
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppNewarrivals;