function city_country(city: string, country: string = "Pakistan"): void {
    console.log(`"${city}` + ", " + `${country}"`);
}

city_country("Makkah", "Saudi Arabia");
city_country("Karachi");
city_country("Lahore");