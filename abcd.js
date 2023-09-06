const { expect } = require('chai');
const { captureConsole } = require('jest'); // For capturing console output

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    const capturedConsole = captureConsole(); // Capture console output
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    capturedConsole.restore(); // Restore console output
    return majorColors.length * minorColors.length;
}

describe('print_color_map Function', () => {
    it('should print color map with proper alignment', () => {
        // Capture console output
        const capturedConsole = captureConsole();

        // Call the function to print the color map
        print_color_map();

        // Get the captured console output
        const output = capturedConsole.output;

        // Define the expected format with proper alignment
        const expectedOutput = [
            '0  | White   | Blue',
            '1  | White   | Orange',
            '2  | White   | Green',
            '3  | White   | Brown',
            '4  | White   | Slate',
            '5  | Red     | Blue',
            '6  | Red     | Orange',
            '7  | Red     | Green',
            '8  | Red     | Brown',
            '9  | Red     | Slate',
            '10 | Black   | Blue',
            '11 | Black   | Orange',
            '12 | Black   | Green',
            '13 | Black   | Brown',
            '14 | Black   | Slate',
            '15 | Yellow  | Blue',
            '16 | Yellow  | Orange',
            '17 | Yellow  | Green',
            '18 | Yellow  | Brown',
            '19 | Yellow  | Slate',
            '20 | Violet  | Blue',
            '21 | Violet  | Orange',
            '22 | Violet  | Green',
            '23 | Violet  | Brown',
            '24 | Violet  | Slate',
        ];

        // Check if the printed output matches the expected format
        expect(output).to.deep.equal(expectedOutput);
    });

    it('should return the total number of color combinations', () => {
        const result = print_color_map();
        expect(result).to.equal(25);
    });
});
