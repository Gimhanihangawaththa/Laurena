import Carousel from 'react-bootstrap/Carousel';//Carousel


var heroData = [
  {
    id: 1,
    image: require("./assests/images/img-hero1.jpg"),
    title: 'Timeless Elegance, Sparkling Forever',
    description: 'Explore our exquisite collection of jewellery that blends tradition with modern artistry perfect for every occasion and every you.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image:require ("./assests/images/img-hero2.jpg"),
    title: 'Jewellery That Tells Your Story',
    description: 'Unveil the beauty of craftsmanship and elegance jewellery designed to make you feel extraordinary.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require("./assests/images/img-hero3.jpg"),
    title: 'Shine Bright, Shine Beautiful',
    description: 'Celebrate life’s precious moments with jewellery made to shine as brightly as you do.',
    link: 'https://www.twitter.com'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                     
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;