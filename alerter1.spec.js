const { expect } = require('chai');
const sinon = require('sinon');
const { networkAlertStub, alertInCelcius, alertFailureCount } = require('./alerter');

describe('alertInCelcius Function', () => {
    it('should count alert failures', () => {
        // Create a Sinon stub for networkAlertStub
        const stub = sinon.stub();

        // Replace the networkAlertStub with the Sinon stub
        const originalNetworkAlertStub = networkAlertStub;
        networkAlertStub = stub;

        // Configure the stub to return a non-ok response (500)
        stub.returns(500);

        // Call alertInCelcius with a Fahrenheit temperature
        alertInCelcius(400.5);

        // Restore the original networkAlertStub function
        networkAlertStub = originalNetworkAlertStub;

        // Assert that alertFailureCount is incremented
        expect(alertFailureCount).to.equal(1);
    });
});
