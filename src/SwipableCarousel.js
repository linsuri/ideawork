import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class SwipableCarousel extends React.Component {
  render() {
    return (
      <div className="carousel">
        <div className="carousal-text">
          <p className="carousal-title">Screening:</p>
          <p className="carousal-title">DVF Secret Agent Part 2</p>
          <p className="carousal-date">October 15, 2017</p>
          <p className="carousal-p">Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.</p>
        </div>
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
            <img className="carousel-img" src="img/hero-landing.png" alt="carousel" />
          </div>
          <div>
            <img className="carousel-img" src="img/layer-60.png" alt="carousel" />
          </div>
          <div>
            <img className="carousel-img" src="img/layer-61.png" alt="carousel" />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default SwipableCarousel
