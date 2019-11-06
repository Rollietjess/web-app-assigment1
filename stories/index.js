import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


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


storiesOf("Movies List App/Movie", module).add("default", () => ( 
  <Movie movie={sample}/>
));    

storiesOf("Movies List App/Movie List", module).add("default", () => { 
  const samples = [sample, sample, sample, sample, sample]
  return <MovieList movies={samples}/>
});