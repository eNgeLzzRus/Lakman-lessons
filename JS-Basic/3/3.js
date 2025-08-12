"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

for (let product in products) {
    let sale = products[product].price / 100 * 15;
    console.log(sale);
    products[product].price -= sale;
}

console.log(products);