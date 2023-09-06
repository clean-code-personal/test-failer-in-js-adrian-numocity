const { expect } = require('chai');
//const { captureConsole } = require('jest-console'); // For capturing console output

// Import the print_color_map function
const {print_color_map} = require('./misaligned.js'); 

 describe('print_color_map Function', () => {
    it('should have aligned "|" characters', () => {
        // Capture console output
        const capturedConsole = captureConsole();

        // Call the function to print the color map
        print_color_map();

        // Get the captured console output
        const output = capturedConsole.output;

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
        //const result = print_color_map();
        expect(expect()=>result).to.equal(25);
        console.log(result);
    });

    it('the last pair number must be 24', () => {
        expect(()=pairNumber).to.equal(25);
    });
}); 


