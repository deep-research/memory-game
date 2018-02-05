import React, {Component} from "react";
import "./Images.css";
import shuffle from 'shuffle-array';
import images from "../../images.json"

shuffle(images)

class Images extends Component {
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
                    location={image.location}>
                </img>
              ))}
            </div>
            <br/><br/>
          </div>
        );
    }
}

export default Images;