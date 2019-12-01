import actorModel from './api/actors/actorModel';

const actors = [
    {
        'name': 'Robert Pattinson',
        'age': 33
      },
      {
        'name': 'Zac Efron',
        'age': 32
      },
      {
        'name': 'Julia Roberts',
        'age': 52
      },
      {
        'name': 'Amber Heard',
        'age': 33
      },
];

export default async function loadActors() {
  try {
    await actorModel.deleteMany();
    await actorModel.collection.insertMany(actors);
    console.info(`${actors.length} actors were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Contact Data: ${err}`);
  }
}