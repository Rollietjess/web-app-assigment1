import React, { Component, Fragment } from "react";
import "../../fontawesome";
import "./movieReview.css";

class movieReview extends Component {
  render() {
    return (
      <div className="row review">
          <p className="review_title">{this.props.review.author}</p>
          <span>{this.props.review.content}</span>
          <a href={this.props.review.url} target="_blank">Read more</a>
      </div>
    );
  }
}
export default movieReview;
