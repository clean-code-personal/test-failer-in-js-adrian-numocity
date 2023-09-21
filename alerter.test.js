const { expect } = require('chai');
let { alertInCelcius, alertFailure } = require('./alerter');

function networkAlertStub(){
    return 500;
}

function networkAlertStub2(){
    return 200;
}

describe('alertInCelcius Function', () => {
    it('should count alert failures', () => {
         alertInCelcius(200,networkAlertStub)
         alertInCelcius(200,networkAlertStub)
         alertInCelcius(200,networkAlertStub)
        
        expect(alertFailure.count).to.equal(3)
    });
    
    it('should return failure count 0, if there is no error', () => {
        alertFailure.count =0;
        alertInCelcius(200,networkAlertStub2)
        alertInCelcius(200,networkAlertStub2)
        
        expect(alertFailure.count).to.equal(0)
    });
});
