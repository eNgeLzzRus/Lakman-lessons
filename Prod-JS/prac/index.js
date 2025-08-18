const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

function makeGETRequest(url) {
    return new Promise((resolve ,reject) => {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { 
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText); 
                } else {
                    reject(new Error(`Ошибка ${xhr.status}`));
                }
            }
        };

        xhr.open('GET', url, true);
        xhr.send();
    })
  
}

function clickHandler() {
    document.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.add');
        const moreBtn = e.target.closest('.more');
        const lessBtn = e.target.closest('.less');
        const removeBtn = e.target.closest('.remove');
        

        if (addBtn) {
            const inGoodsList = addBtn.closest('.goods-list');
            const inCart = addBtn.closest('.cart');

            if (inGoodsList) {
                const item = addBtn.closest('.goods-item');
                const name = item.querySelector('h3').textContent;
                const price = +item.querySelector('p').textContent;
                cart.add({ product_name: name, price });
            }
            if (inCart) {
                const item = addBtn.closest('.cart-item');
                const name = item.querySelector('h3').textContent;
                const price = +item.querySelector('p').textContent;
                cart.add({ product_name: name, price });
            }
            
        }
        if (moreBtn) {
            const inCart = moreBtn.closest('.cart');
            const inGoodsList = moreBtn.closest('.goods-list');

            if (inCart) {
                const item = moreBtn.closest('.cart-item');
                const name = item.querySelector('h3').textContent;
                const price = +item.querySelector('p').textContent;
                cart.add({ product_name: name, price });
            }
            if (inGoodsList) {
                const item = moreBtn.closest('.goods-item');
                const name = item.querySelector('h3').textContent;
                const price = +item.querySelector('p').textContent;
                cart.add({ product_name: name, price });
            }
        }

        if (lessBtn) {
            const inCart = lessBtn.closest('.cart');
            const inGoodsList = lessBtn.closest('.goods-list');
            if (inCart) {
                const item = lessBtn.closest('.cart-item');
                const name = item.querySelector('h3').textContent;
                const price = +item.querySelector('p').textContent;
                cart.less({ product_name: name, price });
            }
            if (inGoodsList) {
                const item = lessBtn.closest('.goods-item');
                const name = item.querySelector('h3').textContent;
                const price = +item.querySelector('p').textContent;
                cart.less({ product_name: name, price });
            }
        }

        if (removeBtn) {
            const inCart = removeBtn.closest('.cart');
            const inGoodsItem = removeBtn.closest('.goods-item');

            if (inCart) {
                const item = removeBtn.closest('.cart-item');
                const name = item.querySelector('h3').textContent;
                const price = +item.querySelector('p').textContent;
                cart.remove({ product_name: name, price });
            }

            if (inGoodsItem && !inCart) {
                const name = inGoodsItem.querySelector('h3').textContent;
                const price = +inGoodsItem.querySelector('p').textContent;
                cart.remove({ product_name: name, price });
            }
        }

        const clearCartBtn = e.target.closest('.clear-cart');
        if (clearCartBtn) {
            cart.clear();
            return;
        }
    });
}


class GoodsItem {
    constructor(product_name = "Товар", price = 0) {
        this.product_name = product_name;
        this.price = price;
    }

    render(inCart = false, quantity = 0) {
        return `<div class='goods-item'>
            <h3>${this.product_name}</h3>
            <p>${this.price}</p>
            <div class='cart-selection'>
                ${inCart ?
                    `<div class='cart-info'>
                        <button class='less'> - </button>
                        <span>${quantity}</span>
                        <button class='more'> + </button>
                    </div>
                    <button class='remove'>Удалить из корзины</button>` :
                    `<button class='add'>Добавить в корзину</button>`
                }
            </div>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        return makeGETRequest(`${API_URL}catalogData.json`)
        .then(data => {
            this.goods = JSON.parse(data);
        })
        .catch(err => {
            console.error('Ошибка загрузки', err);
            this.goods = []; 
            throw err;
        });
    }
    
    render() {
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHTML += goodItem.render(cart.isInCart(good), cart.getProductQuantity(good));
        });
        document.querySelector('.goods-list').innerHTML = listHTML;
    }


    sumPrice() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        }) ;
        document.querySelector('.total-price').innerHTML = `<p class="total-price">Общая сумма твоваров: <span>${sum}</span></p>`;
    }

    
}

class GoodsCart {
    constructor(list) {
        this.list = list;
        this.items = [];
    }

    getProductQuantity(product) {
        const existing = this.items.find(item => item.product_name === product.product_name);
        if (existing) {
            return existing.quantity;
        }   
        return 0;
    }
    
    isInCart(product) {
        const existing = this.items.find(item => item.product_name === product.product_name);
        return !!existing;
    }

    add(product) {
        const existing = this.items.find(item => item.product_name === product.product_name);
        if (existing) {
            existing.quantity++;
            this.update();
            this.render();
            return;
        }
        this.items.push({ ...product, quantity: 1 });
        this.update();
        this.render();
    }

    less(product) {
        const existing = this.items.find(item => item.product_name === product.product_name);
        if (existing.quantity > 1) {
            existing.quantity--;
        }   else {
            this.remove(product);  
        }
        this.update();
        this.render();
    }

    remove(product) {
        const existing = this.items.find(item => item.product_name === product.product_name);
        if (existing) {
            this.items = this.items.filter(item => item.product_name !== product.product_name); 
        }
        this.update();
        this.render();
    }

    update() {
        list.render();
        cart.showCartPrice();
    }

    showCart() {
        const cartButton = document.querySelector('.cart-button');

        cartButton.addEventListener('click', () => {
            const cart = document.querySelector('.cart');
            const cartPrice = document.querySelector('.cart-price');
            document.querySelector('.goods-list').classList.toggle('non-vision');
            document.querySelector('.total-price').classList.toggle('non-vision');
            cart.classList.toggle('non-vision');
            cartPrice.classList.toggle('non-vision');
            this.render();
            cart.showCartPrice();
            
        })
    }

    showCartPrice() {
        if (this.items.length > 0) {
            let price = 0;
            this.items.forEach(item => {
                price += item.price * item.quantity;
            }) ;
            document.querySelector('.cart-price').innerHTML = `<p class="cart-price">Стоимость корзины: <span>${price}</span></p>`;
            return;
        }
        document.querySelector('.cart-price').innerText = '';
    }

    render() {
        const cart = document.querySelector('.cart');
        let cartHTML = '';

        if (this.items.length > 0) {
            this.items.forEach(item => {
                let cartItem = new CartItem(item);
                cartHTML += cartItem.render(true, item.quantity);
            })

            cart.innerHTML = cartHTML; 
        
            if (this.items.length > 0) {
                cart.insertAdjacentHTML('beforeend', `<button class="clear-cart">Очистить корзину</button>`);
            }
            return;
        }
        cart.innerHTML = '<p class="empty-cart">Корзина пуста</p>';
    }

    clear() {
        this.items = [];
        this.update();
        this.render();
    }
}

class CartItem {
    constructor({ product_name, price }) {
        this.product_name = product_name;
        this.price = price;
    }

    render(inCart = false, quantity = 0) {
        return `<div class="cart-item">
            <h3>${this.product_name}</h3>
            <p>${this.price}</p>
            <div class="cart-selection">
                ${inCart ?
                    `<div class='cart-info'>
                        <button class="less"> - </button>
                        <span>${quantity}</span>
                        <button class="more"> + </button>
                    </div>
                    <button class="remove">Удалить из корзины</button>` :
                    `<button class="add">Добавить в корзину</button>`
                }
            </div>
        </div>`;
    }
}

const list = new GoodsList();
const cart = new GoodsCart(list);
document.addEventListener('DOMContentLoaded', () => {
    cart.showCart();
    clickHandler();
});
list.fetchGoods()
    .then(() => {
        list.render();
        list.sumPrice();
    })
    .catch(err => {
        console.log('Не удалось загрузить товары', err);
    })

