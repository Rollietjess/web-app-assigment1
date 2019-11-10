import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";


import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Movie from '../src/components/movie/'
import MovieList from '../src/components/movieList/'
import MovieInfo from '../src/components/moviePublic/publicInfo'
import MovieInfoPrivate from '../src/components/moviePrivate/'
import MovieInfoPublic from '../src/components/moviePublic/'
import CreateMovie from '../src/components/movieCreate/'



const sample = {
  popularity: 457.734,
  vote_count: 4850,
  video: false,
  poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  id: 475557,
  adult : false,
  backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
  original_language: "en",
  original_title: "Joker",
  genre_ids: [
    80,
    18,
    53
  ],
  title: "Joker",
  vote_average: 8.5,
  overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
  release_date: "2019-10-04"
}

storiesOf("Movies List App/Header", module).add("default", () => (
    <Header noMovies={33} />
  ));
  
storiesOf("Movies List App/Filter Controls", module).add("default", () => (
  <FilterControls />
));   


// storiesOf("Movies List App/Movie", module).add("default", () => ( 
//   <Movie movie={sample} deleteHandler={action('Delete confirmed') }/>
// ));    
storiesOf("Movies List App/Movie", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => ( 
   <Contact movie={sample} deleteHandler={action('Delete confirmed') }/>
));

// storiesOf("Movies List App/Movie List", module).add("default", () => { 
//   const samples = [sample, sample, sample, sample, sample]
//   return <MovieList movies={samples}/>
// });
storiesOf("Movies List App/Movie List", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => { 
  const samples = [sample, sample, sample, sample, sample]
  return <MovieList movies={samples}/>
});


storiesOf("Movies List App/Movie Info/MovieInfo", module)
.add("default", () => ( 
   <MovieInfo movie={sample}/>
));

storiesOf("Movies List App/Movie Info/Movie private", module)
.add("default", () => ( 
   <MovieInfoPrivate movie={sample}/>
));

storiesOf("Movies List App/Movie Info/Movie public info", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => ( 
   <MovieInfoPublic movie={sample}/>
));

storiesOf("Movies List App/Create movie", module)
.add("default", () => ( 
   <CreateMovie movie={sample}/>
));