"use strict";
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar('Toyota', 'GR Supra', ['color', 'White Metallic'], ['Year', 2024]);
console.log(myCar);
