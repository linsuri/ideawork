import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class SwipableCarousel extends React.Component {
  render() {
    return (
      <div className="carousel">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          stopOnHover={false}
          interval={5000}
          swipeable={true}
        >
          <div>
            <img className="carousel-img" src="img/carousel.png" alt="carousel" />
          </div>
          <div>
            <img className="carousel-img" src="img/carousel.png" alt="carousel" />
          </div>
          <div>
            <img className="carousel-img" src="img/carousel.png" alt="carousel" />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default SwipableCarousel
