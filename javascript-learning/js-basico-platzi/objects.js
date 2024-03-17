function car (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var cars = [];

for (let i = 0; i > 3; i++) {
    var brand = prompt("brand: ");
    var model = prompt("model: ");
    var year = prompt("year: ");
    cars.push(new car(brand, model, year));
}

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}