import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./moviePublic.css";
import { Link } from "react-router-dom";
import PublicInfo from "../moviePublic/publicInfo"

export default ({ movie }) => {
  const name = movie.title;
  return (
    <Fragment>
      <div className="row">
      <div className="col-2">
        <Link to="/">
          <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
          <span>Back</span>
        </Link>
        </div>
        <div className="col-3 offset-2">
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
        <div className="col-5 bg-secondary text-light">
           <span>Map placeholder</span>
        </div>
      </div>
    </Fragment>
  );
};