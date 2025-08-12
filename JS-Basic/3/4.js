"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// 1
const productsWithPhoto = products.filter(function (product) {
    if (product.photos && product.photos != 0) {
        return product;
    }
})

console.log("Продукты с фото:");
console.log(productsWithPhoto);


// 2
const sortedProductsByPrice = products.sort(function (a, b) {
    return a.price - b.price;
});

console.log("Отсортированные по цене продукты:");
console.log(sortedProductsByPrice);


// 3
