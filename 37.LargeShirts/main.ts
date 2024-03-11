type ShirtSize = "small" | "medium" | "large";

interface Shirt {
  size: ShirtSize;
  message: string;
}

function make_shirt(size: ShirtSize = "large", message: string = "I love TypeScript"): Shirt {
  return { size, message };
}

const largeShirtDefaultMessage = make_shirt(); 
const mediumShirtDefaultMessage = make_shirt("medium"); 
const customShirt = make_shirt("small", "Custom message"); 

console.log("Large shirt with default message:", largeShirtDefaultMessage);
console.log("Medium shirt with default message:", mediumShirtDefaultMessage);
console.log("Custom size and message shirt:", customShirt);