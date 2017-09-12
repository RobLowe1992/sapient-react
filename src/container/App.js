import React, { Component } from 'react';
import '../scss/App.scss';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Item from '../components/Item';
import Review from '../components/Review';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Nav/>
        <Item/>
        <Review />
        <Footer />
      </div>
    );
  }
}

export default App;
