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

describe('Utils |', function() {
  describe('hasMixedCase', function() {
    it('should return true when the string has a both upper and lower case letters', function() {
      assert.equal(hasMixedCase("helloWorld"), true);
    });

    it('should return false when the string has no special char', function() {
      assert.equal(hasMixedCase("helloworld"), false);
    });
  });
});

describe('Utils |', function() {
  describe('hasValidLength', function() {
    it('should return true when the string has the length more than 6', function() {
      assert.equal(hasValidLength("helloworld"), true);
    });

    it('should return false when the string has no special char', function() {
      assert.equal(hasValidLength("hello"), false);
    });
  });
});

describe('Utils |', function() {
  describe('hasDigit', function() {
    it('should return true when the string has the length more than 6', function() {
      assert.equal(hasDigit("hello123"), true);
    });

    it('should return false when the string has no special char', function() {
      assert.equal(hasDigit("hello"), false);
    });
  });
});
