import React, {Component} from "react";
import "./Images.css";
import shuffle from 'shuffle-array';
import images from "../../images.json"
import Navbar from "../Navbar";

class Images extends Component {
    state = {
        score: 0,
        clickedImages: [],
        topScore: 0,
        message: "Click an image to begin!",
        images: shuffle(images)
    };

    imgClick = (id) => {
        if (this.state.clickedImages.includes(id)) {
            if (this.state.score > this.state.topScore) {
                this.setState({
                    topScore: this.state.score
                })
            }
            this.setState({
                score: 0,
                clickedImages: [],
                message: "You guessed incorrectly!",
                images: shuffle(images)
            })
        } else {
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
            <div>
                <Navbar
                    score={this.state.score}
                    topScore={this.state.topScore}
                    message={this.state.message} />
                <div className="container">
                    <div className="col">
                    {images.map(image => (
                        <img
                            src={image.image}
                            key={image.id}
                            id={image.id}
                            name={image.name}
                            alt={image.name}
                            occupation={image.occupation}
                            location={image.location}
                            onClick={() => this.imgClick(image.id)}>
                        </img>
                    ))}
                    </div>
                    <br/><br/>
                </div>
            </div>
        );
    }
}

export default Images;