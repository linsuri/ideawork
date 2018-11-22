import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {/* <Carousel />
        <ContentContainer /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
