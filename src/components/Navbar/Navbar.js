import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-md navbar-dark fixed-top d-flex justify-content-around py-3 header">
            <a className="navbar-brand" href=".">Memory Game</a>
            {/* Display a message to the user */}
            <div className="navbar-brand">{this.props.state.message}</div >
            {/* Display the current score to the user */}
            <div className="navbar-brand">Score: {this.props.state.score} | Top Score: {this.props.state.topScore}</div >
          </nav>
        );
    }
}

export default Navbar;
