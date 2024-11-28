const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const spy = sinon.spy;
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('should check if the Utils.calculateNumber function has been called with the same value', () => {
    let calculateNumberSpy = spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20));

    calculateNumberSpy.restore();
  })
})
