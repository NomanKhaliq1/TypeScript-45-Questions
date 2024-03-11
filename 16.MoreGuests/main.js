"use strict";
let myName = "Noman Khaliq";
let guestList = ["Hamza", "Arsal", "Danish", "Faiza", "Summaiya"];
console.log("Great news, everyone! I found a bigger dinner table, so there's room for more friends.");
guestList.unshift("Ali");
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Sara");
guestList.push("Bilal");
function sendInvite(guestList, hostName) {
    for (let guest of guestList) {
        console.log(`\nHi ${guest},\nI'd love for you to join me for dinner. Your company would be a delight!\nBest, ${hostName}`);
    }
}
let unavailableGuest = "Danish";
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.\n`);
let newGuest = "Ayesha";
guestList[guestList.indexOf(unavailableGuest)] = newGuest;
sendInvite(guestList, myName);
