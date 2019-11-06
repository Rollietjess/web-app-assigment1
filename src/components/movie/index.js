import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./movie.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI'

class Movie extends Component {
  state = {
      status: "",
      id: this.props.movie.id,
      title: this.props.movie.title,
      vote_average: this.props.movie.vote_average,
      release_date: this.props.movie.release_date,
      previousDetails: {
        id: this.props.movie.id,
        title: this.props.movie.title,
        vote_average: this.props.movie.vote_average,
        release_date: this.props.movie.release_date,
      }
  };
  handleEdit = () => this.setState({ status: "edit" });
  handleSave = e => {
    e.preventDefault();
    let updatedRelease = this.state.release_date.trim();
    let updatedRating = this.state.vote_average.trim();
    if (!updatedRelease || !updatedRating) {
    return;
    }
    let { release_date, vote_average } = this.state;
    this.setState({ status: "", previousDetails: { release_date, vote_average } });
    api.update(this.state.previousDetails.id, updatedRelease, updatedRating);
  };     
  handleCancel = () => {
    let { title, vote_average, release_date } = this.state.previousDetails;
    this.setState({ status: "", title, vote_average, release_date });
  };
  handleRatingChange = e => this.setState({ vote_average: e.target.value });
  handleReleaseChange = e => this.setState({ release_date: e.target.value });
  handleDelete = () =>  this.setState({ status : 'del'} );
  handleConfirm = (e) => {
    e.preventDefault();
    this.props.deleteHandler(this.state.id);
  };
  render() {
    // let namesList = this.props.movie.genre_ids.map(function(name){
    //   return <li>{name}</li>;
    // })
    let activeButtons = buttons.normal;
    let leftButtonHandler = this.handleEdit;
    let rightButtonHandler = this.handleDelete;
    let cardColor = "bg-white";
    if (this.state.status === "edit") {
      cardColor = "bg-primary";
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
    } else if (this.state.status === 'del' ) {
      cardColor = "bg-warning";
      activeButtons = buttons.delete;
      leftButtonHandler = this.handleCancel;
      rightButtonHandler = this.handleConfirm;
    }
    return (
      <div className="col-sm-3">
        <div className={`card  ${cardColor}`}>
          <Link
            to={`/movies/${this.props.movie.id}`}
          >
            <img
              className="card-img-tag center "
              alt={this.props.movie.title}
              src={'https://image.tmdb.org/t/p/w500/' + this.props.movie.poster_path}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title ">
              {`${this.props.movie.title}`}
            </h5>
            {this.state.status === "edit" ? (
              <Fragment>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.release_date}
                    onChange={this.handleReleaseChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.vote_average}
                    onChange={this.handleRatingChange}
                  />
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <p>
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                  <span> {this.props.movie.release_date}</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={["fas", "phone"]} />
                  <span> {this.props.movie.vote_average} </span>
                </p>
                {/* <p>
                  <FontAwesomeIcon icon={["fas", "phone"]} />
                  <span> {namesList} </span>
                </p> */}

              </Fragment>
            )}
          </div>
          <div className="card-footer">
            <div
              className="btn-group d-flex btn-group-justified"
              role="group"
              aria-label="..."
            >
              <button
                type="button"
                className={"btn w-100 " + activeButtons.leftButtonColor}
                onClick={leftButtonHandler}
              >
                {activeButtons.leftButtonVal}
              </button>
              <button
                type="button"
                className={"btn w-100 " + activeButtons.rightButtonColor}
                onClick={rightButtonHandler}
              >
                {activeButtons.rightButtonVal}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Movie;
