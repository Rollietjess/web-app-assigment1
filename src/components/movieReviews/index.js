import React, { Component } from "react";
import request from "superagent";
import MovieReview from "../movieReview/";
import api from "../../dataStore/stubAPI"; // NEW

export default class MovieReviews extends Component {

    componentDidMount() {
        request.get("https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/reviews?api_key="+process.env.REACT_APP_TMD_API_KEY+"&language=en-US&page=1").end((error, res) => {
          if (res) {
            let { results: movieReviews } = JSON.parse(res.text);
            api.initializeReviews(movieReviews);
            this.setState({});
          } else {
            console.log(error);
          }
        });
    };

    render() {
        let movieReviews = api.getAllReviews();
        const movieReviewCards = movieReviews.map(m => (
            <MovieReview 
              key={m.id} 
              review={m}
            />
        ));
        return (
            <div className="container-fluid">
                {movieReviewCards}
            </div>
        );
    }
}