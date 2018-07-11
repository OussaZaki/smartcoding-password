/* This is the completed test of all utility functions. */

var assert = require('assert');

var hasValidLength =  require('../utils').hasValidLength;
var hasMixedCase =  require('../utils').hasMixedCase;
var hasDigit =  require('../utils').hasDigit;
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

  describe('hasMixedCase', function() {
    it('should return true when the string has both upper and lower case letters', function() {
      assert.equal(hasMixedCase("helloWORLD"), true);
    });

    it('should return false when the string has only upper or lower case letters', function() {
      assert.equal(hasMixedCase("helloworld"), false);
    });

    it('should return false when the string has no upper or lower case letters', function() {
      assert.equal(hasMixedCase("12345"), false);
    });

  });

  describe('hasValidLength', function() {
    it('should return true when the string has the length more than 6', function() {
      assert.equal(hasValidLength("helloworld"), true);
    });

    it('should return false when the string has the length less or equal 6', function() {
      assert.equal(hasValidLength("hello"), false);
    });
  });

  describe('hasDigit', function() {
    it('should return true when the string contains intiger(s)', function() {
      assert.equal(hasDigit("hello123"), true);
    });

    it('should return false when the string does not contain any intiger', function() {
      assert.equal(hasDigit("hello"), false);
    });
  });
});
