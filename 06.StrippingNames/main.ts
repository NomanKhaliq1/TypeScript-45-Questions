let pername2: string = "\t Noman Ghouri \t";
let pername3: string = "Start \n Noman Ghouri \n End";
let stripingname: string = pername2.trim();
let stripingname2: string = pername3.replace(/\n/g, '');
console.log("Name with whitespace:", pername2);
console.log("Name with linebreak:", pername3);
console.log("Stripped whitespace:", stripingname);
console.log("Stripped linebreak:", stripingname2);