const { expect } = require('chai');
const tshirts = require('./tshirts');

describe('size function', () => {
    it('should return an error for invalid input', () => {
        // Test with an invalid input that should trigger an error
        expect(() => tshirts('invalid')).to.throw(Error);
    });

    it('should return "S" for a shoulder measurement of 37', () => {
        const result = tshirts(37);
        expect(result).to.equal('S');});

    it('should return "M" for a shoulder measurement of 40', () => {
        const result = tshirts(38);
        expect(result).to.equal('M');});
    
    it('should return "L" for a shoulder measurement of 37', () => {
        const result = tshirts(40);
        expect(result).to.equal('L');});

    it('should throw a minimum size error', () => {

        expect(()=>tshirts(-20)).to.throw(Error,'Minimum shoulder size is 36cms')
    });

    it('should throw a maximum size error', () => {

        expect(()=>tshirts(100)).to.throw(Error,'Maximum shoulder size is 42 cms')
    });

    it('should correctly identify border value', () => {
        const result = tshirts(38);
        expect(result).to.equal('M')
    });

});
