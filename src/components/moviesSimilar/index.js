import React, { Component } from "react";
import request from "superagent";
import MovieSimilar from "../movieSimilar/";
import api from "../../dataStore/stubAPI"; // NEW
// import "./create.css";

export default class moviesSimilar extends Component {

    componentDidMount() {
        request.get("https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/similar?api_key="+process.env.REACT_APP_TMD_API_KEY+"&language=en-US&include_adult=false&include_video=false&page=1").end((error, res) => {
          if (res) {
            let { results: similarMovies } = JSON.parse(res.text);
            api.initializeSimilar(similarMovies);
            this.setState({});
          } else {
            console.log(error);
          }
        });
    };

    render() {
        let similarMovies = api.getAllSimilar();
        const movieSimilarCards = similarMovies.map(m => (
            <MovieSimilar 
              key={m.title} 
              movie={m}
            />
        ));
        return (
            <div className="container-fluid">
                <h3>Similar Movies</h3>
                <div className="row">{movieSimilarCards}</div>
            </div>
        );
    }
}