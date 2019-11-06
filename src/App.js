import React, { Component } from "react";
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
    componentDidMount() {
        request.get("https://api.themoviedb.org/3/discover/movie?api_key="+process.env.REACT_APP_TMD_API_KEY+"&language=en-US&include_adult=false&include_video=false&page=1").end((error, res) => {
        if (res) {
            let { results: movies } = JSON.parse(res.text);
            api.initialize(movies);
            this.setState({});
        } else {
            console.log(error);
        }
        });
    }
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
            <div className="jumbotron">
            <Header noMovies={sortedMovies.length} />
            <FilterControls
                onUserInput={this.handleChange}
            />
            <MovieList movies={sortedMovies}
            deleteHandler={this.deleteMovie}  />
        </div>
        );
    }
}

export default App;