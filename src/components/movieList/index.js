import React, { Component } from "react";
import Movie from "../movie/";
import './movieList.css';

export default class MovieList extends Component {
  render() {
    const movieCards = this.props.movies.map(m => (
      <Movie 
        key={m.title} 
        movie={m} 
        deleteHandler={this.props.deleteHandler}
      />
    ));
    return (
      <div className="container-fluid movies">
        <div className="row">{movieCards}</div>
      </div>
    );
  }
}