import React, {Component} from "react";
import "./Images.css";
import shuffle from 'shuffle-array';
import images from "../../images.json"

shuffle(images)

class Images extends Component {
    state = {
        score: 0,
        clickedImages: [],
        topScore: 0
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
                clickedImages: []
            }, () => {
            console.log(this.state.score)
            console.log(this.state.clickedImages)
            console.log(this.state.topScore)
            console.log("You guessed incorrectly!")
            })
        } else {
            this.setState({
                score: this.state.score + 1,
                clickedImages: [...this.state.clickedImages, id]
            }, () => {
            console.log(this.state.score)
            console.log(this.state.clickedImages)
            console.log(this.state.topScore)
            shuffle(images)
            this.forceUpdate()
            console.log("You guessed correctly!")
            })
        }
    }

    componentDidMount() {
        console.log(this.state.score)
        console.log(this.state.clickedImages)
        console.log(this.state.topScore)
    }

    render() {
        return (
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
        );
    }
}

export default Images;