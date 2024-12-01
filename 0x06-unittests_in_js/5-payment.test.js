const Utils = require('./utils');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });
  afterEach(function() {
    consoleLogSpy.restore();
  });
  it('should verify console is called once and logs the exact string: The total is: 120', () => {
    sendPaymentRequestToApi(100, 20);
    consoleLogSpy.args.forEach((call, index) => {
      call.forEach((arg, i) => {
        console.log(`Call #${index + 1}, Arg #${i + 1}:`, arg);
      });
    });

    console.log('Arguments captured by consoleLogSpy:', consoleLogSpy.args);

    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
  it('should verify console is called once and logs the exact string: The total is: 20', () => {
    sendPaymentRequestToApi(10, 10);

    console.log('Arguments captured by consoleLogSpy:', consoleLogSpy.args);

    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
