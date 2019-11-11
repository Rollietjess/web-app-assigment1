import React from "react";
import "./privateInfo.css";
import "../../fontawesome";

export default ({ movie }) => {
  return (
    <div className="row">
      <div className="col-12">
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};