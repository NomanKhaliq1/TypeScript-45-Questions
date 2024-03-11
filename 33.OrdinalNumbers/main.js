"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    let ordinalEnding;
    if (numbers[i] === 1) {
        ordinalEnding = "st";
    }
    else if (numbers[i] === 2) {
        ordinalEnding = "nd";
    }
    else if (numbers[i] === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${numbers[i]}${ordinalEnding}`);
}
