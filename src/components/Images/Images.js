import React, {Component} from "react";
import "./Images.css";
import images from "../../images.json"

class Images extends Component {
    render() {
        return (
            <div>
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
                            onClick={() => this.props.imgClick(image.id)}>
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