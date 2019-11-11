import React, { Component } from "react";
import "./create.css";

export default class movieCreate extends Component {
    constructor() {
        super();
        this.state = {
            myclass: '',
            title: "",
            vote_average: "",
            release_date: "",
            genre: "",
            overview: ""
        }
        this.divclicked = this.divclicked.bind(this);
    }

    divclicked() {
        if (this.state.myclass === '') {
            this.setState({
                myclass: 'coolclass'
            })
        }
        else {
            this.setState({
                myclass: '',
            })
       }
    };

    handleCreate = e => {
        e.preventDefault();
        if(this.state.title != "" && this.state.genre != ""){
            this.props.createHandler(this.state);
        } else {
            console.log("Error!!")
        }
    }; 
    
    handleChange = ({ target }) => {
        console.log(target.name)
        this.setState({ [target.name]: target.value });
    };

    render() {

        return (
            <div className="container-fluid ">
                <button variant="outline-primary" onClick={this.divclicked}>Add new movie</button>

                <div id="create" className={this.state.myclass}>
                    <div className="row">
                        <div className="col input_block">
                            <label>Title</label>
                            <input type="text" name="title" id="title" className="text" placeholder="Joker" onChange={this.handleChange}/>
                        </div>
                        <div className="col input_block">
                            <label>Release date</label>
                            <input type="text" name="release_date" className="text" placeholder="20-03-2017" onChange={this.handleChange}/>
                        </div>
                        <div className="col input_block">
                            <label>Rating</label>
                            <input type="text" name="vote_average" className="text" placeholder="8.2"  onChange={this.handleChange}/>
                        </div>
                        <div className="col input_block">
                            <label>Genre</label>
                            <select
                                name="genre"
                                id="genre"
                                onChange={this.handleChange}
                                defaultValue="none"
                            >
                            <option value="none" disabled>Select a genre</option>
                            <option value="10749">Romance</option>
                            <option value="16">Animation</option>
                            <option value="35">Comedy</option>
                            <option value="27">Horror</option>
                            {/* {list} */}
                            </select>
                        </div>

                    </div>
                    <div className="row mt">
                        <div className="col input_block">
                            <label>Plot</label>
                            <textarea name="overview" id="overview" onChange={this.handleChange} placeholder="Plot"></textarea>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn-primary" onClick={this.handleCreate}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}