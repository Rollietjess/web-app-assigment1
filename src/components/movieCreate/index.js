import React, { Component, Fragment } from "react";
import "./create.css"
import api from '../../dataStore/stubAPI'

export default class movieCreate extends Component {
    state = {
        title: "",
        vote_average: "",
        release_date: ""
    };
    handleCreate = e => {
        e.preventDefault();
        this.props.createHandler(this.state);
        // api.create(this.state);
      }; 
//   handleTextChange = e => {
//       this.handleChange(e, "title", e.target.value);
//   };
//   handleGenreChange = e => {
//       this.handleChange(e, "genre", e.target.value);
//   };
handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
 };
  render() {

    return (
        <div className="container-fluid ">
            <button>Add new movie</button>

            <div className="create">
                <div className="row input_block">
                    <div className="col">
                        <label>Title</label>
                        <input type="text" name="title" id="title" className="text" placeholder="Joker" onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <label>Release date</label>
                        <input type="text" name="release_date" className="text" placeholder="20-03-2017" onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <label>Rating</label>
                        <input type="text" name="vote_average" className="text" placeholder="8.2"  onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <button type="submit" onClick={this.handleCreate}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}