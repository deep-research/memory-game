import React, {Component} from "react";
import "./Images.css";
import shuffle from 'shuffle-array';
import images from "../../images.json"

shuffle(images)

class Images extends Component {
    state = {
        clicks: 0
    };

    imgClick = (i) => {
        this.setState({
            clicks: this.state.clicks + 1
        }, () => {
        console.log(this.state)
        })
    }

    componentDidMount() {
        console.log(this.state)
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