let car = 'subaru';

console.log("\nTest 1");
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("\nTest 2");
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("\nTest 3");
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("\nTest 4");
console.log("Is car == 'subaru' && car.length > 5? I predict True.");
console.log(car == 'subaru' && car.length > 5);

console.log("\nTest 5");
console.log("Is car === 'subaru' && car.length === 6? I predict True.");
console.log(car === 'subaru' && car.length === 6);

console.log("\nTest 6");
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru');

console.log("\nTest 7");
console.log("Is car.length === 5? I predict False.");
console.log(car.length === 5);

console.log("\nTest 8");
console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');

console.log("\nTest 9");
console.log("Is car.includes('bar')? I predict True.");
console.log(car.includes('bar'));

console.log("\nTest 10");
console.log("Is car.endsWith('ru')? I predict False.");
console.log(car.endsWith('ro'));