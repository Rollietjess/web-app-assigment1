import should from 'should';
import movieModel from '../movieModel';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

describe('movieModelTests', () => {

    let movie = {};
    //create a post with random user id before each test
    beforeEach(() => {
        const id = mongoose.Types.ObjectId().toString(); //generates pseudo random ObjectID 
        movie = {
            _id: id,
            title: "A Title"
        };
    });

    it('should validate a movie with title', (done) => {
        const m = new movieModel(movie);
        m.validate((err) => {
            should.not.exist(err);
            m.title.should.equal(movie.title);
            m._id.toString().should.equal(movie._id);
            done();
        });
    });

    it('should require a title', (done) => {

        const badMovie = {
            overview: "This is not valid"
        };
        const m = new movieModel(badMovie);
        m.validate((err) => {
            const errors = err.errors;
            errors.should.have.property("title");
            done();
        });
    });
});