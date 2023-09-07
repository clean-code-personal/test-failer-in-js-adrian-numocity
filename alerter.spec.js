const { expect } = require('chai');
let { networkAlertStub, alertInCelcius } = require('./alerter'); 
let alertFailureCount = 0;

describe('alertInCelcius Function', () => {
    it('should count alert failures', () => {
        // Stub the networkAlertStub function to return a non-ok response (500)
        const originalNetworkAlertStub = networkAlertStub;
        networkAlertStub = function (celcius) {
            console.log(`Alert! Temperature is ${celcius} degrees`);
            // Return 500 for not-ok
            return 500;
        };

        // Call alertInCelcius with a Fahrenheit temperature
        alertInCelcius(400.5);

        // Restore the original networkAlertStub function
        networkAlertStub = originalNetworkAlertStub;

        // Assert that alertFailureCount is incremented
        expect(alertFailureCount).to.equal(1);
    });
});
