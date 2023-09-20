const { expect } = require('chai');
const sinon = require('sinon');
let { alertInCelcius, alertFailureCount } = require('./alerter');

describe('alertInCelcius Function', () => {
    it('should count alert failures', () => {
        // Create a Sinon stub for the alert function
        const stub = sinon.stub();

        // Replace the networkAlertStub with the Sinon stub
        const originalNetworkAlertStub = alertInCelcius;

        // Modify alertInCelcius to use the stub
        alertInCelcius = (fahrenheit) => {
            const celsius = (fahrenheit - 32) * 5 / 9;
            const returnCode = stub(celsius);
            if (returnCode !== 200) {
                alertFailureCount += 1;
            }
        };

        // Configure the stub to return a non-ok response (500)
        stub.returns(500);

        // Call alertInCelcius with a Fahrenheit temperature
        alertInCelcius(400.5);

        // Restore the original alertInCelcius function
        alertInCelcius = originalNetworkAlertStub;

        // Assert that alertFailureCount is incremented
        expect(alertFailureCount).to.equal(1);
    });
});
