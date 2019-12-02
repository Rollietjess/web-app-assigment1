import express from 'express';
import Movie from './movieModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// Get all movies, using try/catch to handle errors
router.get('/', async (req, res) => {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (error) {
      handleError(res, error.message);
    }
});


// Create a movie, using async handler
router.post('/', asyncHandler(async (req, res) => {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
}));

/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
    return res.send(500, err);
  };

export default router;