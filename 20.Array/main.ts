let provinces: string[] = ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"];
let mountains: string[] = ["Salt Range", "Kirthar Range", "Tirich Mir", "Chiltan Mountain"];
let rivers: string[] = ["Indus River", "Indus River", "Swat River", "Hingol River"];
let countries: string[] = ["Pakistan", "Pakistan", "Pakistan", "Pakistan"];
let cities: string[] = ["Lahore", "Karachi", "Peshawar", "Quetta"];
let languages: string[] = ["Punjabi", "Sindhi", "Pashto", "Balochi"];

console.log("Province           | Mountain          | River        | Country  | City       | Language");
console.log("------------------------------------------------------------------------------------------");

for (let i = 0; i < provinces.length; i++) {
    let provincePadding = " ".repeat(18 - provinces[i].length);
    let mountainPadding = " ".repeat(17 - mountains[i].length);
    let riverPadding = " ".repeat(12 - rivers[i].length);
    let countryPadding = " ".repeat(8 - countries[i].length);
    let cityPadding = " ".repeat(10 - cities[i].length);

    console.log(`${provinces[i]}${provincePadding} | ${mountains[i]}${mountainPadding} | ${rivers[i]}${riverPadding} | ${countries[i]}${countryPadding} | ${cities[i]}${cityPadding} | ${languages[i]}`);
}