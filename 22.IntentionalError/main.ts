let myArray: number[] = [1, 2, 3, 4, 5];
let indexToAccess = 6;

// if (indexToAccess < 0 || indexToAccess >= myArray.length) {
//     throw new Error("Array index out of bounds");
// }

if (indexToAccess < 0 || indexToAccess >= myArray.length) {
    console.log("Index is out of bounds. Setting index to last valid index.");
    indexToAccess = myArray.length - 1;
}

let element = myArray[indexToAccess];
console.log("Element at index", indexToAccess, ":", element);