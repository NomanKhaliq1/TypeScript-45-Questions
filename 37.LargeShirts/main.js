"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    return { size, message };
}
const largeShirtDefaultMessage = make_shirt();
const mediumShirtDefaultMessage = make_shirt("medium");
const customShirt = make_shirt("small", "Custom message");
console.log("Large shirt with default message:", largeShirtDefaultMessage);
console.log("Medium shirt with default message:", mediumShirtDefaultMessage);
console.log("Custom size and message shirt:", customShirt);
