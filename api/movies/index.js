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

// Update a movie
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body.id) delete req.body.id;
  const movie = await Movie.update({
    id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!movie) return res.sendStatus(404);
  return res.json(200, movie);
}));

// Delete a movie
router.delete('/:id', asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.send(404);
  await movie.remove();
  return res.status(204).send(movie);
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