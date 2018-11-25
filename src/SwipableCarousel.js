import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class SwipableCarousel extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     width: 0,
  //     height: 0,
  //     toggleClassesSmall: 'carousel-img-big',
  //   }
  //   this.carousel = React.createRef()
  // }
  //
  // componentDidMount() {
  //   this.updateWidthHeight()
  //   window.addEventListener('resize', this.updateWidthHeight)
  //   window.addEventListener('resize', this.toggleClasses)
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWidthHeight)
  //   window.removeEventListener('resize', this.toggleClasses)
  // }
  //
  // updateWidthHeight = () => {
  //   this.setState({
  //     width: this.refs.carousel.clientWidth,
  //     height: this.refs.carousel.clientHeight,
  //   }, () => console.log('h', this.state.height, 'w', this.state.width))
  // }
  //
  // toggleClasses = () => {
  //   if (this.state.width/this.state.height > 4/3) {
  //     this.setState({
  //       toggleClassesSmallBig: 'carousel-img-big',
  //     }, () => console.log('big'))
  //   } else if (this.state.width/this.state.height <= 4/3) {
  //     this.setState({
  //       toggleClassesSmallBig: 'carousel-img-small',
  //     }, () => console.log('small'))
  //   }
  // }

  render() {
    return (
      <div className="carousel"
        // ref="carousel"
        >
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
