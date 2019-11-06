import React, { Component } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class List extends Component {
  render() {
    let movies = this.props.movies.map((f, index) => (
        <tr key={index}>
            <td>{f.title}</td>
            <td>{f.genre}</td>
            <td>{f.duration}</td>
        </tr>
    ));
    return (
      <div>
        <h1>{name}</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody >
            {movies}
          </tbody >
      </table>
    </div>
    );
  }
}
