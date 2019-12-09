import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import request from "superagent";
import api from "./dataStore/stubAPI"; // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import MoviePage from "./components/moviePage";
import * as api2 from './api';



class Router extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    console.log("Index!")
    var numberArray = [1, 2, 3, 4, 5, 6];
    var rand = numberArray[Math.floor(Math.random() * numberArray.length)];
    // request.get("https://api.themoviedb.org/3/discover/movie?api_key="+process.env.REACT_APP_TMD_API_KEY+"&language=en-US&include_adult=false&include_video=false&page="+rand+"").end((error, res) => {
    request.get("http://localhost:3005/api/movies").end((error, res) => {
      if (res) {
        // console.log(res)
        // let { results: movies } = JSON.parse(res.body);
        let movies = res.body;
        console.log(movies)
        api.initialize(movies);
        this.setState({});
      } else {
        console.log(error);
      }
    });
    
     // Call our fetch function below once the component mounts
     this.callBackendAPI()
     .then(res => this.setState({ data: res.express }))
     .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
       <BrowserRouter>
        {/* <div className="jumbotron"> */}
          <div className="container-fluid ">
            <Switch>
              <Route path="/movies/:id" component={MoviePage} />
              <Route exact path="/" component={App} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById("root"));