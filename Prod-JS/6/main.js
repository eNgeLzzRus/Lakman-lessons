const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('nav-bar', {
    template: `
        <header>
            <search-input
                :search-line="searchLine"
                @update:search-line="forwardUpdate"
            />
            <button 
                class="cart-button" 
                @click="$emit('toggle-cart')"
            >
                Корзина
            </button>
        </header>
    `,
    props: ['searchLine'],
    methods: {
        forwardUpdate(value) {
            this.$emit('update:search-line', value);
        }
    }
});

Vue.component('search-input', {
    template: `
        <input 
            :value="searchLine" 
            @input="$emit('update:search-line', $event.target.value)" 
            class="goods-search" 
            placeholder="Search"
        >
    `,
    props: ['searchLine']
});

Vue.component('goods-item', {
    template: `
        <div class="goods-item">
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
            <div class="cart-selection" v-if="inCart">
                <div class="cart-info">
                    <button class="less" @click="$emit('less')">-</button>
                    <span>{{ quantity }}</span>
                    <button class="more" @click="$emit('add')">+</button>
                </div>
                <button class="remove" @click="$emit('remove')">Удалить из корзины</button>
            </div>
            <div class="cart-selection" v-else>
                <button class="add" @click="$emit('add')">Добавить в корзину</button>
            </div>
        </div>
    `,
    props: ['good', 'inCart', 'quantity']
});

Vue.component('goods-list', {
    template: `
        <div>
            <div class="goods-list" v-if="filteredGoods.length > 0">
                <goods-item 
                    v-for="good of filteredGoods" 
                    :key="good.id"
                    :good="good"
                    :in-cart="isInCart(good)"
                    :quantity="getQuantity(good)"
                    @add="$emit('add', good)"
                    @less="$emit('less', good)"
                    @remove="$emit('remove', good)"
                />
            </div>
            <h1 class="error" v-else>Нет данных</h1>
            <div class="total-price" v-if="filteredGoods.length > 0">
                <p>Общая стоимость в корзине: <span>{{ totalPrice }}</span></p>
            </div>
        </div>
    `,
    props: ['filteredGoods', 'cart', 'totalPrice'],
    methods: {
        isInCart(good) {
            return this.cart.some(item => item.id === good.id);
        },
        getQuantity(good) {
            const item = this.cart.find(item => item.id === good.id);
            return item ? item.quantity : 0;
        }
    }
});

Vue.component('cart-item', {
    template: `
        <div class="cart-item">
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
            <div class="cart-selection">
                <div class="cart-info">
                    <button class="less" @click="$emit('less')">-</button>
                    <span>{{ good.quantity }}</span>
                    <button class="more" @click="$emit('add')">+</button>
                </div>
                <button class="remove" @click="$emit('remove')">Удалить из корзины</button>
            </div>
        </div>
    `,
    props: ['good']
});

Vue.component('cart-list', {
    template: `
        <div class="cart">
            <div class="cart-list" v-if="cart.length > 0">
                <cart-item 
                    v-for="good of cart" 
                    :key="good.id"
                    :good="good"
                    @add="$emit('add', good)"
                    @less="$emit('less', good)"
                    @remove="$emit('remove', good)"
                />
            </div>
            <h1 v-else class="error">Корзина пуста</h1>
            <div class="price__clear" v-if="cart.length > 0">
                <div class="cart-price">
                    <p>Итого: <span>{{ totalPrice }}</span></p>
                </div>
                <button class="clear-cart" @click="$emit('clear-cart')">Очистить корзину</button>
            </div>
        </div>
    `,
    props: ['cart', 'totalPrice']
});

Vue.component('connection-error', {
    template: `
        <div class="connection-error">
            <h2>Извините, соединение не установлено...</h2>
        </div>
    `,
})

new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        cart: [],
        isVisibleCart: false,
        connectionStatus: false,
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
        addToCart(good) {
            const item = this.cart.find(item => item.id === good.id);
            if (!item) {
                this.cart.push({ id: good.id, price: good.price, product_name: good.product_name, quantity: 1 });
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
            console.log(this.cart);
        }
    },
    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = goods.map(good => ({ ...good, id: good.id_product }));
            this.filteredGoods = this.goods;
            this.connectionStatus = true;
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

        }
    }
});