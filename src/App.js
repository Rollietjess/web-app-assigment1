import React, { Component, Fragment } from "react";
import Header from "./components/header/";
import MovieList from "./components/movieList/";
import FilterControls from "./components/filterControls/";
import MovieCreate from "./components/movieCreate/";
import request from "superagent";
import api from "./dataStore/stubAPI"; // NEW
import _ from "lodash";

import * as api2 from './api';
import { Redirect } from 'react-router-dom';


class App extends Component {
    state = { search: "", genre: "all" };
    handleChange = (type, value) => {
        type === "title" ? this.setState({ search: value }) : this.setState({ genre: value });
    };
    deleteMovie = (key) => {
        request
            .delete("http://localhost:3005/api/movies/"+key)
            .end((err, res) => {
                // Calling the end function will send the request
                if(res){
                    api.delete(key); 
                    this.setState({});
                }
            });                          
    };
    createMovie = (movie) => {
        request
            .post("http://localhost:3005/api/movies")
            .send(movie) // sends a JSON post body
            .end((err, res) => {
                // Calling the end function will send the request
                if(res){
                    api.create(movie); 
                    this.setState({});
                }
            });
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
              <MovieCreate createHandler={this.createMovie}/>
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