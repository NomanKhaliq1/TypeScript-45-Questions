let magicians: string[] = ["Albus Dumbledore", "Harry Potter", "Lord Voldemort (Tom Riddle)", "Hermione Granger", "Severus Snape"];

function make_great(magicianNames: string[]): string[] {
    return magicianNames.map(magician => magician + ' the Great');
}

function show_magicians(magicianNames: string[]): void {
    magicianNames.forEach(magician => {
        console.log(magician);
    });
}

let greatMagicians = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);