class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}

const milk = new Product('milk', 250);
const meat = new Product('meat', 500);
const tea = new Product('tea', 200);
const water = new Product('water', 50);

const products = [milk, meat, tea, water];

let catalog = document.querySelector('.catalog');

function makeCatalog(products) {
    for (let product of products) {
        let productCart = document.createElement('div');
        let productName = document.createElement('h2');
        let productPrice = document.createElement('h3');

        productName.innerText = product.name;
        productPrice.innerText = product.price;

        productCart.appendChild(productName);
        productCart.appendChild(productPrice);

        productCart.classList.add('cart')
        
        catalog.appendChild(productCart);
    }
}

makeCatalog(products);