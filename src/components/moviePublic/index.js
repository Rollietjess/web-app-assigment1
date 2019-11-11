import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./moviePublic.css";
import { Link } from "react-router-dom";
import PublicInfo from "../moviePublic/publicInfo"
import MovieReviews from "../movieReviews/"

export default ({ movie }) => {
  const name = movie.title;
  return (
    <Fragment>
      <div className="row pt">
        <div className="col-2">
          <Link to="/">
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="1x" />
            <span>Back</span>
          </Link>
        </div>
        <div className="col">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} className="movie" alt={name} />
        </div>
        <div className="col-4">
          <PublicInfo movie={movie} />
        </div>
        <div className="col-5">
          <div className="row">
            <h3>Plot</h3>
            {movie.overview}
          </div>
          <div className="row">
            <h3>Reviews</h3>
            <MovieReviews movie={movie} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};