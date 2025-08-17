class GoodsItem {
    constructor(title = "Товар", price = 0) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ]
    }
    
    render() {
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHTML;
    }

    sumPrice() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        }) ;
        document.querySelector('.goods-list').insertAdjacentHTML('afterend',`Общая сумма твоваров: ${sum}`);
    }
}

class GoodsCart {
    constructor() {

    }

    showCart() {
 
    }

    addToCart() {
 
    }

    clearCart() {
 
    }
}

class CartItem {
    constructor() {

    }

    deleteFromCart() {
        
    }

    changeQuantity() {

    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumPrice();