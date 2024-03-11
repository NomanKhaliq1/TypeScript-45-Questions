"use strict";
let myName = "Noman Khaliq";
let guestList = ["Hamza", "Arsal", "Ayesha", "Faiza", "Summaiya", "Ali", "Sara", "Bilal"];
console.log();
console.log("I've just found out that my new dinner table won’t arrive in time, and I can invite only two people for dinner.");
console.log();
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Dear ${removedGuest}, I'm terribly sorry, but due to space constraints, I can't invite you to the dinner.`);
}
console.log();
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to my dinner. Looking forward to it!`);
});
guestList.splice(0, guestList.length);
console.log();
console.log("Current guest list:", guestList);
