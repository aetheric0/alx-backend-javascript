const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should return the rounded sum when two whole numbers are passed', function () {
    assert.equal(calculateNumber(5, 6), 11);
  });

  it('should return the rounded sum of the numbers passed as the correct whole number', function () {
    assert.equal(calculateNumber(5.7, 2.5), 8);
  });

  it('should return the rounded sum of both numbers as the correct whole number (int and float)', function () {
    assert.equal(calculateNumber(5, 6.3), 11);
  });

  it('should return the rounded sum of both numbers as the correct whole number (float and int)', function () {
    assert.equal(calculateNumber(6.7, 8), 15);
  });

  it('should return NaN when no arguments are passed', function () {
    assert.ok(Number.isNaN(calculateNumber()));
  });

  it('should return NaN when an array of numbers is passed', function () {
    assert.ok(Number.isNaN(calculateNumber([1, 3])));
  });

  it('should return the rounded sum of only the first two arguments when more than two arguments are passed', function () {
    assert.equal(calculateNumber(1.7, 8, 11, 88), 10);
  });
});
