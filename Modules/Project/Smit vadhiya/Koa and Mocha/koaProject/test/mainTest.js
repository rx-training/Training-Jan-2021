const assert = require('chai').assert
const hello = require('../main')

/* describe('Main',() => {
    it('Should retuen hello',() =>{
        assert.lengthOf(4,"hello")
    })
}) */

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(1), -1);
    });
  });
});