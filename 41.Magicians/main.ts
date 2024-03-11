let magicians: string[] = ["Harry Potter", "Hermione Granger", "Albus Dumbledore", "Severus Snape", "Lord Voldemort (Tom Riddle)"];

function show_magicians(magicianNames: string[]): void {
    magicianNames.forEach((magician) => {
        console.log(magician);
    });
}

function show_magicians2(magicianNames: string[]): string[] {
    return magicianNames;
}

show_magicians(magicians);
console.log(show_magicians2(magicians));