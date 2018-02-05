import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
          <div>
            <div className="footer-padding"></div>
            <nav className="navbar navbar-expand-md navbar-dark footer">
              <a className="navbar-brand" href="/">Memory Game</a>
            </nav>
          </div>
        );
    }
}

export default Footer;
