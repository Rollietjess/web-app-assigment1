import React from "react";
import { storiesOf } from "@storybook/react";

import List from "../src/components/movies/list";
const movieList = "List of movies";
const movies = [
  {
    title: "Twilight",
    genre: "Romance",
    duration: 2
  },
  {
    title: "Warm Bodies",
    genre: "Romance",
    duration: 2
  }
];
storiesOf("Movies", module)
  .add("01 - Table with movies", () => {
    return <List movies={movies} name={movieList}/>;
  })

