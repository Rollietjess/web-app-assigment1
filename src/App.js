import React, { Component } from "react";
import Header from "./components/header/";
import MovieList from "./components/movieList/";
import FilterControls from "./components/filterControls/";
import request from "superagent";
import api from "./dataStore/stubAPI"; // NEW

class App extends Component {
    componentDidMount() {
        request.get("https://api.themoviedb.org/3/discover/movie?api_key=883f5afa483c27d3e7c1cf2cb5b2f2ce&language=en-US&include_adult=false&include_video=false&page=1").end((error, res) => {
        if (res) {
            let { results: movies } = JSON.parse(res.text);
            console.log(movies)
            api.initialize(movies);
            this.setState({});
        } else {
            console.log(error);
        }
        });
    }
    render() {
        let movies = api.getAll();
        return (
        <div className="jumbotron">
            <Header noMovies={movies.length} />
            <FilterControls />
            <MovieList movies={movies} />
        </div>
        );
    }
}

export default App;