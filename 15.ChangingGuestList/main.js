"use strict";
let myName = "Noman Khaliq";
let guestList = ["Hamza", "Arsal", "Danish", "Faiza", "Summaiya"];
function sendInvite(guestList, hostName) {
    for (let guest of guestList) {
        console.log(`\nHi ${guest},\nI'd love for you to join me for dinner. Your company would be a delight!\nBest, ${hostName}`);
    }
}
sendInvite(guestList, myName);
let unavailableGuest = "Danish";
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.\n`);
let newGuest = "Ayesha";
guestList[guestList.indexOf(unavailableGuest)] = newGuest;
sendInvite(guestList, myName);
