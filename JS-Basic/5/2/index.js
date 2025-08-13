let div = document.querySelector('.main-div');

let button1 = document.createElement('button');
button1.innerText = 'Добавить в корзину';

let button2 = document.createElement('button');
button2.innerText = 'Очистить корзину';

div.appendChild(button1);
div.appendChild(button2);

let cartText = document.createElement('h2');
div.appendChild(cartText);

addToCart();

let count = 0;
let sum = 0;

function addToCart() {
    button1.addEventListener('click', function() {
        count += 1;
        sum = count * 100;
        makeCart();
    })

    button2.addEventListener('click', function() {
        count = 0;
        sum = 0;
        makeCart();
    })
}

function makeCart() {
    if (count == 0) {
        cartText.innerText = "Корзина пуста";
    }   else {
        cartText.innerText = `В корзине: ${count} товаров на сумму ${sum} рублей`
    }
}

makeCart();