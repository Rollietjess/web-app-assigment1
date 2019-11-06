import React, { Component, Fragment } from "react";
import Header from "./components/header/";
import MovieList from "./components/movieList/";
import FilterControls from "./components/filterControls/";
import request from "superagent";
import api from "./dataStore/stubAPI"; // NEW
import _ from "lodash";

require('dotenv').config()

class App extends Component {
    state = { search: "", genre: "all" };
    handleChange = (type, value) => {
        type === "title" ? this.setState({ search: value }) : this.setState({ genre: value });
    };
    deleteMovie = (key) => {
        api.delete(key); 
        this.setState({});                          
    };
    render() {
        let movies = api.getAll();
        let filteredMovies = movies.filter(m => {
            const title = `${m.title}`;
            return title.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
        });

        filteredMovies = this.state.genre === "all" ? filteredMovies : filteredMovies.filter(m => m.genre_ids.includes(parseInt(this.state.genre)));
        let sortedMovies = _.sortBy(filteredMovies, m => m.title);
        return (
            <Fragment>
              <Header noMovies={sortedMovies.length} />
              <FilterControls onUserInput={this.handleChange} />
              <MovieList
                movies={sortedMovies}
                deleteHandler={this.deleteMovie}
              />
            </Fragment>
        );
    }
}

export default App;