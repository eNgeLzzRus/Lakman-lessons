<template>
    <div>
        <h1>Products</h1>
        <hr>
        <div class="products-list">
            <div 
                    class="products-item"
                    v-for="product in products"
                    :key="product"
            >
                <router-link class="link" :to="'/products/' + product.id_product">
                    {{ product.title }}
                </router-link>
                <p>{{ product.price }}</p> 
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
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('products', {
            products: 'items'
        }),
        ...mapGetters('cart', {
            inCart: 'products'
        }),
    },
    methods: {
        ...mapActions('cart', {
            addToCart: 'add',
            removeFromCart: 'remove'
        })
    },
    created() {
    }
}

</script>

<style lang="scss" scoped>
.products-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    
    .products-item {
        width: 200px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: 1px solid #2c3e50;
        box-sizing: border-box;
        padding: 20px;
        border-radius: 10px;

        .link {
            text-decoration: none;
            color: #2c3e50;
            font-size: 24px;
        }

        p {
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
    }
}


</style>