const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    {}
];

const $goodsList = document.querySelector('.goods-list');

const renderGoodsItem = ({ title = 'Товар', price = 0 }) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
}

const renderGoodList = (list = goods) => {
    let goodList = list.map(
        (item) => {
            return renderGoodsItem(item);
        }
    ).join('');

    $goodsList.insertAdjacentHTML('beforeend', goodList);
}

renderGoodList();