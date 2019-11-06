import React, { Component } from "react";
import Movie from "../movie/";
import './movieList.css';

export default class MovieList extends Component {
  render() {
    const movieCards = this.props.movies.map(m => (
      <Movie key={m.title} movie={m} />
    ));
    return (
      <div className="container-fluid movies bg-info">
        <div className="row">{movieCards}</div>
      </div>
    );
  }
}