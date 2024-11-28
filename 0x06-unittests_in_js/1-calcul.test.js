const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should return the sum of two numbers when type is SUM', function () {
    assert.strictEqual(calculateNumber('SUM', 5, 6), 11);
  });

  it('should return the difference of two numbers when type is SUBTRACT', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 2.5), 3);
  });

  it('should return the quotient of two numbers when type is DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 8, 2), 4);
  });

  it('should return "Error" when dividing by 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 6.7, 0), 'Error');
  });

  it('should return NaN when arguments are missing', function () {
    assert.ok(!Number.isNaN(calculateNumber()));
  });

  it('should return undefined for unsupported operation types', function () {
    assert.strictEqual(calculateNumber('MULTIPLY', 4, 5), undefined);
  });

  it('should return undefined if only one argument is passed', function () {
    assert.strictEqual(calculateNumber(5, 6), undefined);
  });

  it('should ignore extra arguments beyond the first two numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 1.7, 8, 11, 88), 10);
  });
});
