const {expect} = require('chai')

let pairNumber;

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    const maxPairNumberWidth = (majorColors.length * minorColors.length - 1).toString().length; // Max width for pair numbers
    const maxMajorColorWidth = Math.max(...majorColors.map(color => color.length)); // Max width for major colors

    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const pairNumber = i * 5 + j+1;
            const pairNumberStr = pairNumber.toString().padStart(maxPairNumberWidth, ' ');
            const majorColor = majorColors[i].padEnd(maxMajorColorWidth, ' ');
            const minorColor = minorColors[j];
            
            console.log(`${pairNumberStr} | ${majorColor} | ${minorColor}`);
        }
    }
    
    return majorColors.length * minorColors.length;
}

const result = print_color_map();
console.log('All is well (maybe!)');

module.exports = print_color_map;
