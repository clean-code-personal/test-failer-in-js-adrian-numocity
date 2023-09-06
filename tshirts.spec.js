const { expect } = require('chai');
const tshirts = require('./tshirts');

describe('size function', () => {
    it('should return an error for invalid input', () => {
        // Test with an invalid input that should trigger an error
        expect(() => tshirts('invalid')).to.throw(Error);
    });

    it('should correctly classify sizes', () => {
        // Test with valid inputs
        expect(tshirts(37)).to.equal('S');
        expect(tshirts(40)).to.equal('M');
        expect(tshirts(43)).to.equal('L');
        expect(()=>tshirts(-20)).to.throw(Error,'Shoulder size cannot be negative');
        expect(()=>tshirts(38)).to.equal('M');
        expect(()=>tshirts(100)).to.throw(Error,'Shoulder size exceeds limit');
    });
});
