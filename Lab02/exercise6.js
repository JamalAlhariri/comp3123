class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
}

const myCar = new Sedan("Honda Civic", 2024, 15000);
console.log(myCar.model);
console.log(myCar.year);
console.log(myCar.balance);