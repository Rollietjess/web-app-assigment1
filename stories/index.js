import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";


import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Movie from '../src/components/movie/'
import MovieList from '../src/components/movieList/'



const sample = {
  title: 'Twilight',
  vote_average: 8.6,
  release_date: 2,
  picture: {thumbnail: './film-poster-placeholder.png'}
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