let users: string[] = ["User1", "User2", "User3"];

if (users.length > 0) {
    for (let user of users) {
        console.log("Hello, " + user + "!");
    }
} else {
    console.log("We need to find some users!");
}

users = [];

if (users.length > 0) {
    for (let user of users) {
        console.log("Hello, " + user + "!");
    }
} else {
    console.log("We need to find some users!");
}