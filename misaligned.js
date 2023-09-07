const {expect} = require('chai')

let pairNumber;

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            pairNumber=i*5+j;
            console.log(`${pairNumber} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

result = print_color_map();

console.log('All is well (maybe!)');

module.exports = print_color_map;
