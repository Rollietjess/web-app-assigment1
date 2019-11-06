import React, { Component } from "react";
import Header from "./components/header/";
import MovieList from "./components/movieList/";
import FilterControls from "./components/filterControls/";

class App extends Component {
  render() {
    const sample = {
        title: 'Twilight',
        genre: 'Romance',
        duration: 2,
        picture: {thumbnail: './film-poster-placeholder.png'}
    };
      

    const movies = [sample, sample, sample, sample, sample];

    return (
      <div className="jumbotron">
        <Header noMovies={10} />
        <FilterControls />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;