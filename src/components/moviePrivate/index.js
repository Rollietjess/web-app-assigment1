import React from "react";
import "./privateInfo.css";
import "../../fontawesome";
import MoviesSimilar from "../moviesSimilar/index.js"

export default ({ movie }) => {
  return (
    <div className="row">
      <div className="col-12">
        <MoviesSimilar movie={movie}/>
      </div>
    </div>
  );
};