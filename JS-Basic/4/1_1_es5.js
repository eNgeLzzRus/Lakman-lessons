"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    let sale = this.price * 0.25;
    this.price -= sale;
}

const product1 = new Product('milk', 150);
const product2 = new Product('tea', 300);

console.log(product1);
console.log(product2);

product1.make25PercentDiscount();
product2.make25PercentDiscount();

console.log(product1);
console.log(product2);