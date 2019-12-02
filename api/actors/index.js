import express from 'express';
import Actor from './actorModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// Get all actors, using try/catch to handle errors
router.get('/', async (req, res) => {
    try {
      const actors = await Actor.find();
      res.status(200).json(actors);
    } catch (error) {
      handleError(res, error.message);
    }
});


// Create a actor, using async handler
router.post('/', asyncHandler(async (req, res) => {
    const actor = await Actor.create(req.body);
    res.status(201).json(actor);
}));

// Update a actor
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const actor = await Actor.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!actor) return res.sendStatus(404);
  return res.json(200, actor);
}));

// Delete a actor
router.delete('/:id', asyncHandler(async (req, res) => {
  const actor = await Actor.findById(req.params.id);
  if (!actor) return res.send(404);
  await actor.remove();
  return res.status(204).send(actor);
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