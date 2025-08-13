import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const collectionData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require("../assests/images/img13.jpg"),
    title: 'Elegant Diamond Ring',
    subtitle: 'Engagement Collection'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require("../assests/images/img5.jpg"),
   title: 'Golden Heritage Necklace',
    subtitle: 'Bridal Collection'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require("../assests/images/blog2.jpg"),
    title: 'Sapphire Charm Bracelet',
    subtitle: 'Luxury Accessories'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require("../assests/images/blog1.jpg"),
     title: 'Ruby Crown Ring',
    subtitle: 'Statement Pieces'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require("../assests/images/img12.jpg"),
    title: 'Rose Gold Heart Ring',
    subtitle: 'Romantic Gifts'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require("../assests/images/img10.jpg"),
     title: 'Emerald Royal Ring',
    subtitle: 'Premium Collection'
    
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: require("../assests/images/img7.jpg"),
   title: 'Vintage Gold Bangle',
    subtitle: 'Traditional Jewellery'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: require("../assests/images/img8.jpg"),
    title: 'Diamond Drop Necklace',
    subtitle: 'Luxury Collection'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: require("../assests/images/img9.jpg"),
   title: 'Emerald Royal Necklace',
    subtitle: 'Premium Collection'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppCollection() {
  return (
    <section id="collection" className="block collection-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Collections</h2>
          <div className="subtitle">Luxury You Deserve</div>
        </div>
        <Row className='portfoliolist'>
          {
            collectionData.map(collection => {
              return (
                <Col sm={4} key={collection.id}>
                  <div className='portfolio-wrapper'>
                    <a href={collection.link}>
                      <Image src={collection.image} />
                      <div className='label text-center'>
                        <h3>{collection.title}</h3>
                        <p>{collection.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppCollection;