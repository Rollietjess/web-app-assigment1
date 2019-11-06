import React, { Component } from "react";
import "./filterControls.css"

export default class filterControls extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Filter </span>
              <input type="text" placeholder="Title" />
              <span> Genre: </span>
              <select id="genre">
                <option value="all">All</option>
                <option value="10749">Romance</option>
                <option value="27">Horror</option>
              </select>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}