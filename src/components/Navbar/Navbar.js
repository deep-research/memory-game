import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-md navbar-dark fixed-top d-flex justify-content-around py-3 header">
            <a className="navbar-brand" href=".">Memory Game</a>
            <div className="navbar-brand">{this.props.message}</div >
            <div className="navbar-brand">Score: {this.props.score} | Top Score: {this.props.topScore}</div >
          </nav>
        );
    }
}

export default Navbar;
