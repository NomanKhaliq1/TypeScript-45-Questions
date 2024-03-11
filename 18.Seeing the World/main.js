"use strict";
console.log();
let myName = "Noman Khaliq";
let worldPlaces = ['Paris', 'Tokyo', 'New York', 'London', 'Sydney'];
console.log("Original Order:");
for (let i = 0; i < worldPlaces.length; i++) {
    console.log(worldPlaces[i]);
}
console.log();
let sortedPlaces = [...worldPlaces].sort();
console.log("Alphabetical Order:");
for (let i = 0; i < sortedPlaces.length; i++) {
    console.log(sortedPlaces[i]);
}
console.log();
let reversedPlaces = [...worldPlaces].reverse();
console.log("Reversed Order:");
for (let i = 0; i < reversedPlaces.length; i++) {
    console.log(reversedPlaces[i]);
}
console.log();
let reversedSortPlaces = [...worldPlaces].sort().reverse();
console.log("Reverse Alphabetical Order:");
for (let i = 0; i < reversedSortPlaces.length; i++) {
    console.log(reversedSortPlaces[i]);
}
console.log();
