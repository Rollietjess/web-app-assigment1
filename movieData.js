import movieModel from './api/movies/movieModel';

require('dotenv').config()

const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb(process.env.REACT_APP_TMD_API_KEY)

console.log("Movie Data")


export default async function loadMovies() {
  try {
    let movies = []
    movies = await moviedb.discoverMovie().then(res => {
      return res
    }).catch(console.error)

    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies.results);
    console.info(`${movies.results.length} movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}