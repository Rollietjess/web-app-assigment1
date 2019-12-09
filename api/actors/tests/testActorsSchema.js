import should from 'should';
import actorModel from '../actorModel';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

describe('actorModelTests', () => {

    let actor = {};
    //create a post with random user id before each test
    beforeEach(() => {
        const id = mongoose.Types.ObjectId().toString(); //generates pseudo random ObjectID 
        actor = {
            _id: id,
            name: "A name"
        };
    });

    it('should validate a actor with a actor and name', (done) => {
        const m = new actorModel(actor);
        m.validate((err) => {
            should.not.exist(err);
            m.name.should.equal(actor.name);
            m._id.toString().should.equal(actor._id);
            done();
        });
    });
});