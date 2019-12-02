import _ from "lodash";

class StubAPI {
    constructor() {
        this.movies = [];
        this.similarMovies = [];
        this.movieReviews = [];
    }

    find(id) {
        let index = _.findIndex(
            this.movies,
            movie => `${movie.id}` === id
        );
        if (index !== -1) {
            return this.movies[index];
        }
        return null;
    }

    delete(k) {
        let elements = _.remove(this.movies, movie => movie._id === k);
        return elements;
    }

    initialize(movies) {
        this.movies = movies;
    }

    initializeSimilar(similarMovies) {
        this.similarMovies = similarMovies;
    }

    initializeReviews(movieReviews) {
        this.movieReviews = movieReviews;
    }

    getAll() {
        return this.movies;
    }

    getAllSimilar() {
        return this.similarMovies;
    }

    getAllReviews() {
        return this.movieReviews;
    }

    update(key, release_date, vote_average) {
        let index = _.findIndex(this.movies, movie => movie.id === key);
        if (index !== -1) {
            this.movies[index].release_date = release_date;
            this.movies[index].vote_average = vote_average;
            return true;
        }
        return false;
    }

    create(movie) {
        console.log(movie)
        let movieLength = this.movies.length + 1;
        let newMovie = {
            id: movieLength,
            title: movie.title,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
            genre_ids: [parseInt(movie.genre)],
            overview: movie.overview,
            popularity: 128.919,
            vote_count: 4028,
            original_title: movie.title
        }

        console.log(newMovie)
        this.movies.push(newMovie);
        return true;
    }
}

export default new StubAPI();