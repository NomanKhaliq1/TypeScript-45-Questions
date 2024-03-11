"use strict";
let myName = "Noman Khaliq";
let guestList = ["Hamza", "Arsal", "Danish", "Faiza", "Summaiya"];
guestList.unshift("Ali");
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Sara");
guestList.push("Bilal");
let unavailableGuest = "Danish";
let newGuest = "Ayesha";
guestList[guestList.indexOf(unavailableGuest)] = newGuest;
let invitedCount = guestList.length;
let cantComeCount = 1;
let rejectedCount = 0;
while (guestList.length > 2) {
    guestList.pop();
    rejectedCount++;
}
console.log(`\nI am now inviting ${guestList.length} guests to dinner.`);
console.log(`Unfortunately, I had to reject ${rejectedCount} guests.`);
console.log(`And, ${cantComeCount} initially invited guest(s) couldn't make it to the dinner.`);
