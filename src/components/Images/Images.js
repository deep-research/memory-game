import React, {Component} from "react";
import "./Images.css";
import shuffle from 'shuffle-array';
import images from "../../images.json"

shuffle(images)

class Images extends Component {
    render() {
        return (
            <div class="container">
            <div class="col">
              {images.map(image => (
                <img
                    src={image.image}
                    id={image.id}
                    name={image.name}
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