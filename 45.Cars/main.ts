interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = { manufacturer, model };

    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

const myCar = createCar('Toyota', 'GR Supra', ['color', 'White Metallic'], ['Year', 2024]);

console.log(myCar);
