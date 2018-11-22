import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class SwipableCarousel extends React.Component {
  render() {
    return (
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        swipeable={true}
      >
        <div>
          <img src="img/carousel.png" alt="carousel" />
        </div>
        <div>
          <img src="img/carousel.png" alt="carousel" />
        </div>
        <div>
          <img src="img/carousel.png" alt="carousel" />
        </div>
      </Carousel>
    )
  }
}

export default SwipableCarousel
