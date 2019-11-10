import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="page-header">
              <h1>
                Movie List <span className="badge badge-pill badge-success">{this.props.noMovies}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;