<template>
    <div>
        <h1>Cart</h1>
        <hr>
        <div class="empty-cart" v-if="empty">
            <h2>Your cart is empty!</h2>
        </div>
        <template v-else>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product">
                        <td>{{ product.title }}</td>
                        <td>{{ product.price }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="buttons">
              <button class="order-now btn" @click="onOrder">Order Now</button>
              <button class="clearCart btn" @click="clearCart">Clear Cart</button>
            </div>
            
        </template>
        
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('products', {
            productsAll: 'items'
        }),
        ...mapGetters('cart', {
            productsInCart: 'products'
        }),
        products() {
            return this.productsAll.filter((elem) => {
                return this.productsInCart.indexOf(elem.id_product) !== - 1;
            })
        },
        empty() {
            return this.productsInCart.length === 0; 
        }
    },
    methods: {
        ...mapActions('cart', {
            addToCart: 'add',
            removeFromCart: 'remove',
            clearCart: 'clearCart'
        }),
        onOrder() {
            this.$router.push('/order')
        },
    }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

thead {
  background-color: #2c3e50;
  color: #fff;
}

th, td {
  padding: 14px 18px;
  text-align: left;
  font-size: 16px;
}

th {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

tbody tr {
  border-bottom: 1px solid #e0e0e0;
}

tbody tr:last-child {
  border-bottom: none;
}

tbody tr:hover {
  background-color: #f8f9fa;
}

td.price {
  font-weight: 600;
  color: #27ae60;
}

td.actions {
  text-align: right;
}

.actions button {
  background: #e74c3c;
  border: none;
  color: #fff;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.actions button:hover {
  background: #c0392b;
}

.empty-cart {
  margin-top: 40px;
  text-align: center;
  color: #999;
  font-size: 20px;
  font-weight: 500;
}   

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  .btn {
    height: 40px;
    width: 150px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .order-now {
    background-color: rgb(56, 56, 180);
    color: white;
    

    &:hover {
      color: rgb(56, 56, 180);
      border: 1px solid rgb(56, 56, 180);
      background-color: white;
    }
  }

  .clearCart {
    background-color: rgb(209, 81, 81);
    color: white;
    

    &:hover {
      color: rgb(209, 81, 81);
      border: 1px solid rgb(209, 81, 81);
      background-color: white;
    }
  }
}


</style>