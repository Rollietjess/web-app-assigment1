import express from 'express';
import Actor from './actorModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send({ actors: actors });
// });

// Get all actors, using try/catch to handle errors
router.get('/', async (req, res) => {
    try {
      const actors = await Actor.find();
      res.status(200).json(actors);
    } catch (error) {
      handleError(res, error.message);
    }
});

// router.post('/', (req, res) => {
//         let newActor = req.body;
//         if (newActor){
//             actors.push({name: newActor.name, age : newActor.age}) ;
//           res.status(201).send({message: "Actor Created"});
//       }else{
//             res.status(400).send({message: "Unable to find Contact in request. No Contact Found in body"});
//       }
// });

// Create a actor, using async handler
router.post('/', asyncHandler(async (req, res) => {
    const actor = await Actor.create(req.body);
    res.status(201).json(actor);
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