const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        cart: [],
        isVisibleCart: false,
    },
    computed: {
        totalPrice() {
            return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        }
    },
    methods: {
        makeGETRequest(url, callback) {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    callback(JSON.parse(xhr.responseText));
                } else if (xhr.readyState === 4) {
                    console.error('Ошибка загрузки:', xhr.status, url);
                }
            };

            xhr.open('GET', url, true);
            xhr.send();
        },

        isInCart(good) {
            return this.cart.some(item => item.id === good.id);
        },

        getQuantity(good) {
            const item = this.cart.find(item => item.id === good.id);
            return item ? item.quantity : 0;
        },

        addToCart(good) {
            const item = this.cart.find(item => item.id === good.id);
            if (!item) {
                this.cart.push({ id: good.id, price: good.price, product_name: good.product_name, quantity: 1 })
                return;
            }
            this.$set(item, 'quantity', item.quantity + 1);
        },

        less(good) {
            const item = this.cart.find(item => item.id === good.id);
            if (item.quantity > 1) {
                this.$set(item, 'quantity', item.quantity - 1);
                return;
            }
            this.remove(good);
        },

        remove(good) {
            const index = this.cart.findIndex(item => item.id === good.id);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },

        clearCart() {
            this.cart = [];
        },

        cartToggle() {
            this.isVisibleCart = !this.isVisibleCart;
        },
    },
    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = goods.map(good => ({ ...good, id: good.id_product }));
            this.filteredGoods = this.goods;
        });
    },
    watch: {
        searchLine() {
            if (!this.searchLine.trim()) {
                this.filteredGoods = this.goods;
                return;
            }
            const search = this.searchLine.toLowerCase();
            this.isVisibleCart = false;
            this.filteredGoods = this.goods.filter(good =>
                good.product_name.toLowerCase().includes(search)
            );
        },
        
    }
})