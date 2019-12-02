import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ActorSchema = new Schema({
  name: {type: String, required: true},
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Actor', ActorSchema);