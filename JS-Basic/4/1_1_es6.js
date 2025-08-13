"use strict";

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        return this.price -= this.price * 0.25;
    }
}

const product1 = new Product("milk", 150);
const product2 = new Product("tea", 300);

console.log(product1);
console.log(product2);

product1.make25PercentDiscount();
product2.make25PercentDiscount();

console.log(product1);
console.log(product2);