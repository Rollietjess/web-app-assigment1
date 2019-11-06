import React, { Component } from "react";
import request from "superagent";
import "./filterControls.css"

export default class filterControls extends Component {
  // constructor() {
  //   state = {
  //     items: []
  //   };
  // // }
  handleChange = (e, type, value) => {
    e.preventDefault();
    this.props.onUserInput(type, value);
  };
  handleTextChange = e => {
      this.handleChange(e, "title", e.target.value);
  };
  handleGenreChange = e => {
      this.handleChange(e, "genre", e.target.value);
  };


  // componentDidMount() {
  //   fetch("https://api.themoviedb.org/3/genre/movie/list?api_key="+process.env.REACT_APP_TMD_API_KEY+"&language=en-US")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           items: result.items
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           error
  //         });
  //       }
  //     )
  // }
  render() {
    // const {items} = this.state;
    // console.log(items)
    // let list = items.map((m, index) => { 
    //     return (
    //         <option value={m.id} key={index}>
    //           {m.name}
    //         </option>
    //     );
    // });  
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Filter </span>
              <input
                  type="text"
                  placeholder="Title"
                  onChange={this.handleTextChange}
              />
              <span> Genre: </span>
              <select
                id="genre"
                onChange={this.handleGenreChange}
              >
                <option value="all">All</option>
                <option value="10749">Romance</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="27">Horror</option>
                {/* {list} */}
              </select>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}