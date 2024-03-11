"use strict";
// Tests for equality and inequality with strings
let typeScript = "TypeScript";
console.log("\nTests for equality and inequality with strings");
console.log(typeScript == "TypeScript");
console.log(typeScript == "Typescript");
// Tests using the lower case function
console.log("\nTests using the lower case function");
console.log("Typescript".toLowerCase() == "typescript");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(5 == 5);
console.log(5 == 4);
console.log(5 > 6);
console.log(5 < 6);
console.log(5 >= 5);
console.log(5 <= 4);
// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators");
let testAndTrue = (5 > 3) && (10 < 15);
let testAndFalse = (5 > 3) && (10 > 15);
let testOrTrue = (5 > 3) || (10 > 15);
let testOrFalse = (5 < 3) || (10 > 15);
console.log(`Test AND (True): ${testAndTrue}`);
console.log(`Test AND (False): ${testAndFalse}`);
console.log(`Test OR (True): ${testOrTrue}`);
console.log(`Test OR (False): ${testOrFalse}`);
// Test whether an item is in a array
console.log("\nTest whether an item is in a array");
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const fruitToCheck = 'banana';
if (fruits.includes(fruitToCheck)) {
    console.log(`${fruitToCheck} is in the array.`);
}
else {
    console.log(`${fruitToCheck} is not in the array.`);
}
// Test whether an item is not in a array
console.log("\nTest whether an item is not in a array");
const fruits2 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const fruitToCheck2 = 'Mango';
if (fruits2.includes(fruitToCheck2)) {
    console.log(`${fruitToCheck2} is in the array.`);
}
else {
    console.log(`${fruitToCheck2} is not in the array.`);
}
