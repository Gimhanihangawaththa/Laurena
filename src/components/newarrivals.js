import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const newarrivalsData = [
  {
    id: 1,
    image: require('../assests/images/team1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Diamond Drop Necklace',
   
   
  },
  {
    id: 2,
    image: require('../assests/images/team2.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Celestial Star Ring',
   
  },
  {
    id: 3,
    image: require('../assests/images/team3.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Vintage Gold Band',
   
  },
  {
    id: 4,
    image: require('../assests/images/team4.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Emerald Royal Necklace',
   
  },
  {
    id: 5,
    image: require("../assests/images/team5.jpg"),
    
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sapphire Promise Bangle',
    
  },
  {
    id: 6,
    image: require('../assests/images/team6.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Princess Cut Ring',
   
  },
  {
    id: 7,
    image: require('../assests/images/team7.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sapphire Teardrop Earrings',
  
  },
  {
    id: 8,
    image: require('../assests/images/team8.jpg'),
   
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Minimalist Stud Earrings',
   
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
                          <li><a href={ newarrivals.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={ newarrivals.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={ newarrivals.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{ newarrivals.name}</h3>
                    <span className='designation'>{ newarrivals.designation}</span>
                    <p>{ newarrivals.description}</p>
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