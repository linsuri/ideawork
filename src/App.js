import React, { Component } from 'react';
import Header from './Header'
import SwipableCarousel from './SwipableCarousel'
import ContentContainer from './ContentContainer'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <SwipableCarousel />
        <ContentContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
