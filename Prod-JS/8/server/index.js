const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const PORT = 3000;
const catalog_path = path.resolve(__dirname, './data/catalog.json');
const cart_path = path.resolve(__dirname, './data/cart.json');
const stats_path = path.resolve(__dirname, './data/stats.json');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/catalogData', (req, res) => {
    fs.readFile(catalog_path, 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/cart', (req, res) => {
    fs.readFile(cart_path, 'utf8', (err, data) => {
        res.send(data);
    });
});

function addStat(newStat, callback) {
    fs.readFile(stats_path, 'utf8', (err, statsData) => {
        let stats = JSON.parse(statsData);

        stats.push(newStat);
        fs.writeFile(stats_path, JSON.stringify(stats, null, 2), (err) => {
            console.log('Stat added');
            if (callback) callback();
        });
    });
}

app.post('/addToCart', (req, res) => {
    fs.readFile(cart_path, 'utf8', (err, data) => {
        let cart = JSON.parse(data);
        const index = cart.findIndex(g => g.id === req.body.id);
        if (index >= 0) cart[index].quantity++;
        else cart.push({ ...req.body, quantity: 1 });

        fs.writeFile(cart_path, JSON.stringify(cart), (err) => {
            console.log('Cart updated');
            const time = new Date().toLocaleString();
            const newStat = `Товар ${req.body.title} добавлен в корзину ${time}`;
            addStat(newStat, () => res.json(cart));
        });
    });
});

app.post('/moreInCart', (req, res) => {
    fs.readFile(cart_path, 'utf8', (err, data) => {
        let cart = JSON.parse(data);
        const index = cart.findIndex(g => g.id === req.body.id);
        if (index >= 0) cart[index].quantity++;

        fs.writeFile(cart_path, JSON.stringify(cart), (err) => {
            console.log('Cart updated');
            const time = new Date().toLocaleString();
            const newStat = `Количество товара ${req.body.title} увеличено в корзине до ${cart[index].quantity}. - ${time}`;
            addStat(newStat, () => res.json(cart));
        });
    });
});

app.post('/lessInCart', (req, res) => {
    fs.readFile(cart_path, 'utf8', (err, data) => {
        let cart = JSON.parse(data);
        const index = cart.findIndex(g => g.id === req.body.id);
        if (index === -1) return res.json(cart);

        if (cart[index].quantity > 1) cart[index].quantity--;
        else cart = cart.filter(item => item.id !== req.body.id);

        fs.writeFile(cart_path, JSON.stringify(cart), (err) => {
            console.log('Cart updated');
            const time = new Date().toLocaleString();
            const newStat = `Количество товара ${req.body.title} уменьшено в корзине до ${cart[index] ? cart[index].quantity : 0}. - ${time}`;
            addStat(newStat, () => res.json(cart));
        });
    });
});

app.post('/removeFromCart', (req, res) => {
    fs.readFile(cart_path, 'utf8', (err, data) => {
        let cart = JSON.parse(data);
        cart = cart.filter(item => item.id !== req.body.id);

        fs.writeFile(cart_path, JSON.stringify(cart), (err) => {
            console.log('Cart updated');
            const time = new Date().toLocaleString();
            const newStat = `Товар ${req.body.title} удален из корзины. - ${time}`;
            addStat(newStat, () => res.json(cart));
        });
    });
});

app.post('/clearCart', (req, res) => {
    const cart = [];
    fs.writeFile(cart_path, JSON.stringify(cart), (err) => {
        console.log('Cart cleared');
        const time = new Date().toLocaleString();
        const newStat = `Корзина была очищена. - ${time}`;
        addStat(newStat, () => res.json(cart));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
