import React, {Component} from "react";
import "./Jumbotron.css";

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Memory Game</h1>
                    <p className="lead">Click on an image to earn points, but don't click any more than once!</p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;