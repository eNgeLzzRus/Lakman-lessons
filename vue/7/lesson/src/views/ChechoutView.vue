<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <hr />

    <div v-if="empty" class="empty-cart">
        <h2>Your cart is empty!</h2>
    </div>

    <div class="content" v-else>
      <div class="cart">
        

        <table class="cart-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id_product">
              <td>{{ product.title }}</td>
              <td>{{ product.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <form class="order-form" v-if="!empty">
        <h2>Customer Info</h2>
        <input-text
          v-for="(item, index) in info"
          :key="index"
          :index="index"
          :item="item"
        />

        <button
          :disabled="getValidQuantity !== info.length"
          @click.prevent="goResult"
          class="send"
        >
          Order Now
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/InputText.vue';
import { mapGetters } from 'vuex';

export default {
  components: { InputText },
  computed: {
    ...mapGetters('info', {
      info: 'info',
      getValidQuantity: 'getValidQuantity',
    }),
    ...mapGetters('products', {
      productsAll: 'items',
    }),
    ...mapGetters('cart', {
      productsInCart: 'products',
    }),
    products() {
      return this.productsAll.filter((elem) =>
        this.productsInCart.includes(elem.id_product)
      );
    },
    empty() {
      return this.productsInCart.length === 0;
    },
  },
  methods: {
    goResult() {
      this.$router.push('/result');
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.cart,
.order-form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }
}

.empty-cart {
  text-align: center;
  color: #777;
}

.order-form {
  display: grid;
  gap: 20px;
}

.send {
  width: 100%;
  height: 40px;
  border: none;
  background-color: rgb(46, 140, 228);
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: rgb(32, 114, 190);
  }

  &:disabled {
    cursor: default;
    background-color: rgba(46, 140, 228, 0.6);
    color: rgb(219, 219, 219);
  }
}
</style>
