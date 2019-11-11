import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./movieSimilar.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI'

class movieSimilar extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="cardSimilar">
            <img
              className="card-img-tag centerSimilar "
              alt={this.props.movie.title}
              src={this.props.movie.poster_path ? 'https://image.tmdb.org/t/p/w500/' + this.props.movie.poster_path : './film-poster-placeholder.png'}
            />
          <div className="card-bodySimilar">
            <h5 className="card-title ">
              {`${this.props.movie.title}`}
            </h5>

              <Fragment>
                <p>
                  <FontAwesomeIcon icon={["fa", "calendar"]} />
                  <span> {this.props.movie.release_date}</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={["fa", "star"]} />
                  <span> {this.props.movie.vote_average} </span>
                </p>
              </Fragment>
          </div>
        </div>
      </div>
    );
  }
}
export default movieSimilar;
