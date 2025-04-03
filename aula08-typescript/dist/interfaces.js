"use strict";
const s1 = {
    firstname: 'maria',
    lastname: 'pereira',
    id: '5678',
    age: 26
};
console.log(s1);
/**
 * An object that follows an interface that match exactly
 * the contents of an interface.
 */
const car = {
    plate: 'hyh-7828',
    year: 2020,
    maker: 'volkswagen',
    model: 'polo',
    price: 70000,
    color: 'black',
    isExempt: function () {
        return new Date().getFullYear() - this.year > 20;
    },
    // whatever: ''
};
console.log(car);
/**
 * A class that implements an interface must include the contents of the
 * interface but can define additional components.
 */
class Car {
    constructor(plate, year, maker, model, price, color, state) {
        this.plate = plate;
        this.year = year;
        this.maker = maker;
        this.model = model;
        this.price = price;
        this.color = color;
        this.state = state;
    }
    isExempt() {
        return new Date().getFullYear() - this.year > 20;
    }
    toString() {
        return `${this.maker} ${this.model}, plate: ${this.plate}`;
    }
}
const newCar = new Car('hyh-7828', 2020, 'volkswagen', 'polo', 70000, 'black', 'sp');
console.log(newCar + "");
module.exports = {};
