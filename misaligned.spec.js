const {expect} = require('chai');
const print_color_map = require('./misaligned.js');
// Import the print_color_map function
// Redirect console.log to a custom function
const originalLog = console.log;
const capturedLogs = [];

console.log = function (...args) {
    capturedLogs.push(args.join(' '));
    originalLog.apply(console, args);
};

 describe('print_color_map Function', () => {
    it('should have aligned "|" characters', () => {
        
        // Call the function to print the color map
        result = print_color_map();

        // Get the captured console output
        const output = capturedLogs;

        // Check if the "|" characters are aligned in each line
        for (let k = 0; k < output.length - 1; k++) {
            const currentLine = output[k];
            const nextLine = output[k + 1];
            const pipeIndex = currentLine.indexOf('|');
            const nextPipeIndex = nextLine.indexOf('|');

            expect(pipeIndex).to.equal(nextPipeIndex);
        }
    });

    it('should return the total number of color combinations', () => {
        expect(result).to.equal(25);
      
    });

    it('Check if pairnumber is calculated correctly', () => {
        expect(capturedLogs[0]).to.equal(" 1 | White  | Blue");
    }); 
}); 


