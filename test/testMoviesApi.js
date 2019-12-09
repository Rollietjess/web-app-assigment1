import supertest from 'supertest';
import {app} from '../server.js';
import should from 'should';

// UNIT test begin
describe('Movies API test', function () {
    this.timeout(120000);
    // test #1: return a collection of json documents
    it('should return collection of JSON documents', function (done) {
        supertest(app)
            .get('/api/movies')
            .expect('Content-type', /json/)
            .expect(200) // This is the HTTP response
            .then(res => {
                // HTTP status should be 200
                res.should.have.property('status').equal(200);
                done();
            });
    });

    // test #2 add a movie
    it('should add a movie', function (done) {
        // post to /api/movies
        supertest(app)
            .post('/api/movies')
            .send({
                id: 78353465,
                title: 'Twilight',
                overview: 'This is a overview'
            })
            .expect('Content-type', /json/)
            .expect(201)
            .then ((res) => {
                res.status.should.equal(201);
                res.body.should.have.property('_id');
                res.body.title.should.equal('Twilight');
                done();
            });
    });

    // #3 delete a movie
    it('should delete a movie', () => {
        supertest(app)
              .get('/api/movies')
              .expect('Content-type', /json/)
              .expect(200).then( (res) => {
                 const id=res.body[0]._id;
                 supertest(app).delete(`/api/movies/${id}`).expect(204); 
              }).then( (res) => {
                  res.status.should.equal(204);  
              });
      });
});