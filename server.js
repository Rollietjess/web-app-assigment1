// import dotenv from 'dotenv';
// import express from 'express';
// import bodyParser from 'body-parser';
import bodyParser from 'body-parser';
import actorsRouter from './api/actors';
import moviesRouter from './api/movies';

import loadActors from './seed/actorData';
import loadMovies from './seed/movieData';
import './db'

require('dotenv').config()

console.log("Server")

const express = require('express');
const app = express();
const port = process.env.PORT;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/actors', actorsRouter);
app.use('/api/movies', moviesRouter);

if (process.env.seedDb) {
  loadActors();
  loadMovies();
}