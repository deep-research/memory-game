import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Images from "./components/Images";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Images />
        <Footer />
      </div>
    );
  }
}

export default App;
