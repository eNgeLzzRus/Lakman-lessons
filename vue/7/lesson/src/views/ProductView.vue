<template>
    <div>
        <header>
            <h1>{{ product.title }}</h1>
            <button @click="onProducts">Back to Products</button>
        </header>
        
        <hr>
        <div class="bottom">
            <h3>Стоимость: <span>{{ product.price }}</span></h3>
            <button 
                    class="btn btn-add" 
                    @click="addToCart(product.id_product)"
                    v-if="inCart.indexOf(product.id_product) === -1"
                >Add to Cart</button>
            <button 
                    class="btn btn-remove" 
                    @click="removeFromCart(product.id_product)"
                    v-else
            >Remove</button>
        </div>
        
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        id() {
            return this.$route.params.id;
        },
        product() {
            return this.$store.getters['products/item'](this.id);
        },
        ...mapGetters('products', {
            products: 'items'
        }),
        ...mapGetters('cart', {
            inCart: 'products'
        }),
    },
    methods: {
        onProducts() {
            this.$router.push('/products')
        },
        ...mapActions('cart', {
            addToCart: 'add',
            removeFromCart: 'remove'
        })
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        height: 40px;
        width: 150px;
        border-radius: 15px;
        background-color: rgb(56, 56, 180);
        border: none;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            color: rgb(56, 56, 180);
            border: 1px solid rgb(56, 56, 180);
            background-color: white;
        }
    }
}

.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

span {
    color: orangered;

    &::after {
        content: ' ₽';
    }
}

.btn {
    width: 100px;
    height: 30px;
    border-radius: 7px;
    border: none;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &-add {
        background-color: rgb(69, 114, 238);

        &:hover {
            background-color: white;
            border: 1px solid rgb(69, 114, 238);
            color: rgb(69, 114, 238);
        }
    }

    &-remove {
        background-color: rgb(238, 75, 69);

        &:hover {
            background-color: white;
            border: 1px solid rgb(238, 75, 69);
            color: rgb(238, 75, 69);
        }
    }
}
</style>