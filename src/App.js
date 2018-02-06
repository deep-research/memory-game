import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Images from "./components/Images";
import Footer from "./components/Footer";
import shuffle from 'shuffle-array';
import images from "./images.json";
import Navbar from "./components/Navbar";

class App extends Component {
    // Keep track of the data
    state = {
        score: 0,
        topScore: 0,
        clickedImages: [],
        message: "Click an image to begin!",
        images: shuffle(images)
    };

    // When an image is clicked...
    imgClick = (id) => {
        // The game ends when an image is clicked twice
        if (this.state.clickedImages.includes(id)) {
            this.setState({
                score: 0,
                clickedImages: [],
                message: "You guessed incorrectly!",
                images: shuffle(images)
            })
        // If an image is guessed successfully...
        } else {
            // Update the topScore if it was beaten
            if (this.state.score + 1 > this.state.topScore) {
                this.setState({
                    topScore: this.state.score + 1
                })
            }
            // Increment the score counter
            this.setState({
                score: this.state.score + 1,
                clickedImages: [...this.state.clickedImages, id],
                message: "You guessed correctly!",
                images: shuffle(images)
            })
        }
    }

    // The main sections in the application are connected here
    render() {
        return (
            <div className="App">
                <Navbar state={this.state} />
                <Jumbotron />
                <Images state={this.state} imgClick={this.imgClick} />
                <Footer />
            </div>
        );
    }
}

export default App;
