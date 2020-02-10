const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');

describe('Integration', () => {
  after(done => {
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
            assert.deepEqual(res.body, []);
        })
        .end(done);
    });
  })
});