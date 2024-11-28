const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  describe('Two Whole Numbers argument', function () {
    it('should return the rounded sum when two whole numbers are passed', function () {
      assert.equal(calculateNumber(5, 6), 11);
    });
  });
});

describe('calculateNumber', function () {
  describe('Two floating point Numbers argument', function () {
    it('should return the rounded sum of the numbers passed as the correct whole number', function () {
      assert.equal(calculateNumber(5.7, 2.5), 8);
    });
  });
});

describe('calculateNumber', function () {
  describe('First argument integer, Second argument floating point', function () {
    it('should return the rounded sum of both numbers as the correct whole number', function () {
      assert.equal(calculateNumber(5, 6.3), 11);
    });
  });
});

describe('calculateNumber', function () {
  describe('First argument floating point, Second argument integer', function () {
    it('should return the rounded sum of both numbers as the correct whole number', function () {
      assert.equal(calculateNumber(6.7, 8), 15);
    });
  });
});

describe('calculateNumber', function () {
  describe('No arguments passed', function () {
    it('should return NaN', function () {
      assert.equal(calculateNumber(), NaN);
    });
  });
});

describe('calculateNumber', function () {
  describe('Both arguments passed are Strings', function () {
    it('should return NaN', function () {
      assert.equal(calculateNumber('5', '6'), 56);
    });
  });
});

describe('calculateNumber', function () {
  describe('Array of numbers passed', function () {
    it('should return NaN', function () {
      assert.equal(calculateNumber([1, 3]), NaN);
    });
  });
});

describe('calculateNumber', function () {
  describe('More than two arguments passed', function () {
    it('should return the rounded sum of only the first two arguments', function () {
      assert.equal(calculateNumber(1.7, 8, 11, 88), 10)
    });
  });
});
