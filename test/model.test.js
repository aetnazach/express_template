const assert = require('chai').assert;

const { getOne } = require('../lib/model');

describe('model', () => {
  describe('getOne', () => {
    it('should get one item', done => {
      getOne(34)
        .then(item => {
          assert.deepEqual(item, { id: 34 });
          done();
        })
        .catch(done);
    })
  });
});