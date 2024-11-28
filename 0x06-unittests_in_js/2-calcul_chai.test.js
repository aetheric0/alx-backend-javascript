const calculateNumber = require('./1-calcul.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  it('should return the sum of two numbers when type is SUM', function () {
    expect(calculateNumber('SUM', 5, 6)).to.equal(11);
  });

  it('should return the difference of two numbers when type is SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 5.7, 2.5)).to.equal(3);
  });

  it('should return the quotient of two numbers when type is DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
  });

  it('should return "Error" when dividing by 0', function () {
    expect(calculateNumber('DIVIDE', 6.7, 0)).to.equal('Error');
  });

  it('return should be of type String', function () {
    expect(calculateNumber('DIVIDE', 5, 0)).to.be.a('string');
  });

  it('should return NaN when arguments are missing', function () {
    expect(calculateNumber()).to.be.undefined;
  });

  it('should return undefined for unsupported operation types', function () {
    expect(calculateNumber('MULTIPLY', 4, 5)).to.be.undefined;
  });

  it('should return undefined if only one argument is passed', function () {
    expect(calculateNumber(5, 6)).to.be.undefined;
  });

  it('should ignore extra arguments beyond the first two numbers', function () {
    expect(calculateNumber('SUM', 1.7, 8, 11, 88)).to.equal(10);
  });
});
