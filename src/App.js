import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import images from "./images"
import Images from "./components/Images"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Images />
      </div>
    );
  }
}

export default App;
