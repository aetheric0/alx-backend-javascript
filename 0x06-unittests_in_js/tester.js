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
        console.log('Running first test...');
        sendPaymentRequestToApi(100, 20);

        // Print captured arguments directly
        console.log('Captured arguments for first test:', consoleLogSpy.args);

        // Assert
        expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
        expect(consoleLogSpy.calledOnce).to.be.true;

        console.log('Completed first test.');
    });

    it('should verify console is called once and logs the exact string: The total is: 20', () => {
        console.log('Running second test...');
        sendPaymentRequestToApi(10, 10);

        // Print captured arguments directly
        console.log('Captured arguments for second test:', consoleLogSpy.args);

        // Assert
        expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
        expect(consoleLogSpy.calledOnce).to.be.true;

        console.log('Completed second test.');
    });
});
