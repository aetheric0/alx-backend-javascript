const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should return the rounded sum when two whole numbers are passed', function () {
    assert.equal(calculateNumber(5, 6), 11);
  });
});

describe('calculateNumber', function () {
  it('should return the rounded sum of the numbers passed as the correct whole number', function () {
    assert.equal(calculateNumber(5.7, 2.5), 8);
  });
});

describe('calculateNumber', function () {
  it('should return the rounded sum of both numbers as the correct whole number', function () {
    assert.equal(calculateNumber(5, 6.3), 11);
  });
});

describe('calculateNumber', function () {
  it('should return the rounded sum of both numbers as the correct whole number', function () {
    assert.equal(calculateNumber(6.7, 8), 15);
  });
});

describe('calculateNumber', function () {
  it('should return NaN', function () {
    assert.equal(calculateNumber(), NaN);
  });
});

describe('calculateNumber', function () {
  describe('More than two arguments passed', function () {
    it('should return the rounded sum of only the first two arguments', function () {
      assert.equal(calculateNumber(1.7, 8, 11, 88), 10)
    });
  });
});
