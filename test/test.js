var assert = require('assert');
var hasSpecial =  require('../utils').hasSpecial;

describe('Utils |', function() {
  describe('hasSpecial', function() {
    it('should return true when the string has a special char', function() {
      assert.equal(hasSpecial("hello@"), true);
    });

    it('should return false when the string has no special char', function() {
      assert.equal(hasSpecial("hello"), false);
    });
  });
});
