const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

  assert.equal(calculateNumber(5, 6), 11);
  assert.equal(calculateNumber(5.7, 2.5), 8);
  assert.equal(calculateNumber(5, 6.3), 11);
  assert.equal(calculateNumber(6.7, 8), 15);
  assert.equal(calculateNumber(), NaN);
  assert.equal(calculateNumber('5', '6'), 56);
  assert.equal(calculateNumber([1, 3]), NaN);
  assert.equal(calculateNumber(1.7, 8, 11, 88), 10)
