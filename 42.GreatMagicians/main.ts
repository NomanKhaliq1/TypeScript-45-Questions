let magicians: string[] = ["Albus Dumbledore", "Harry Potter", "Lord Voldemort (Tom Riddle)", "Hermione Granger", "Severus Snape"];

function make_great(magicianNames: string[]): void {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] += ' the Great';
    }
}

function show_magicians(magicianNames: string[]): void {
    magicianNames.forEach(magician => {
        console.log(magician);
    });
}

console.log("\nTOP 5 Greatest Magicians\n");
make_great(magicians);
show_magicians(magicians);
