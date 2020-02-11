const request = require('supertest');
const app = require('../server');

describe('Integration', () => {
  afterAll(done => {
    app.close(err => {
      if(err) return done(err);
      console.log('Test server closed');
      done()
    });
  });

  describe('Get Movie List', () => {
    it('should return an empty list', done => {
      request(app)
        .get('/movie')
        .expect(200)
        .expect(res => {
          expect(res.body).toStrictEqual([]);
        })
        .end(done);
    });
  })
});