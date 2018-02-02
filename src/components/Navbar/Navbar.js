import React, {Component} from "react";

class Navbar extends Component {
    render() {
        return (
          <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a className="navbar-brand" href="/">Top navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/">Disabled</a>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>
        );
    }
}

export default Navbar;
