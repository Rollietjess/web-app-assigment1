import React, { Component, Fragment } from "react";
import Header from "./components/header/";
import MovieList from "./components/movieList/";
import FilterControls from "./components/filterControls/";
import request from "superagent";
import api from "./dataStore/stubAPI"; // NEW
import _ from "lodash";

class App extends Component {
  state = { search: "", gender: "all" };
  handleChange = (type, value) => {
    type === "name"
    ? this.setState({ search: value })
    : this.setState({ gender: value });
  };
  deleteContact = (key) => {
    api.delete(key); 
    this.setState({});                          
  };
  render() {
    let movies = api.getAll();
    let filteredContacts = contacts.filter(c => {
      const name = `${c.name.first} ${c.name.last}`;
      return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    });
    filteredContacts =
    this.state.genre === "all"
        ? filteredContacts
        : filteredContacts.filter(c => c.genre === this.state.genre);
    let sortedMovies = _.sortBy(filteredContacts, c => c.title);
    return (
      <Fragment>
        <Header noMovies={sortedMovies.length} />
        <FilterControls onUserInput={this.handleChange} />
        <MovieList
          movies={sortedMovies}
          deleteHandler={this.deleteContact}
        />
      </Fragment>
    );
  }
}

export default App;