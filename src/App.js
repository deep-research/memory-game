import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Images from "./components/Images";
import Footer from "./components/Footer";
import shuffle from 'shuffle-array';
import images from "./images.json";
import Navbar from "./components/Navbar";

class App extends Component {
    state = {
        score: 0,
        topScore: 0,
        clickedImages: [],
        message: "Click an image to begin!",
        images: shuffle(images)
    };

    imgClick = (id) => {
        if (this.state.clickedImages.includes(id)) {
            // if (this.state.score > this.state.topScore) {
            //     this.setState({
            //         topScore: this.state.score
            //     })
            // }
            this.setState({
                score: 0,
                clickedImages: [],
                message: "You guessed incorrectly!",
                images: shuffle(images)
            })
        } else {
            if (this.state.score + 1 > this.state.topScore) {
                this.setState({
                    topScore: this.state.score + 1
                })
            }
            this.setState({
                score: this.state.score + 1,
                clickedImages: [...this.state.clickedImages, id],
                message: "You guessed correctly!",
                images: shuffle(images)
            })
        }
    }

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
