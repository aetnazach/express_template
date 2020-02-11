const { getOne } = require('../lib/model');

describe('model', () => {
  describe('getOne', () => {
    it('should get one item', done => {
      getOne(34)
        .then(item => {
          expect(item).toStrictEqual({ id: 34 });
          done();
        })
        .catch(done);
    })
  });
});