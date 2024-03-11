"use strict";
const current_users = ["Hamza", "Arsal", "Danish", "Faiza", "Summaiya"];
const new_users = ["Rabeea", "Subhan", "Tayyab", "Hamza", "ARSAL"];
for (let i = 0; i < new_users.length; i++) {
    const newUser = new_users[i].toLowerCase();
    if (current_users.map(user => user.toLowerCase()).includes(newUser)) {
        console.log(`The username "${new_users[i]}" is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_users[i]}" is available.`);
    }
}
