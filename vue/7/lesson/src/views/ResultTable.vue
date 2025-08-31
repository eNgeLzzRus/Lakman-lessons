<template>
  <div class="order-result">
    <h1>Order Summary</h1>
    <hr />

    <div class="content">
      <div class="cart">
        <h2>Products in Your Cart</h2>
        <table class="cart-table" v-if="products.length">
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
            <tr class="total">
              <td>Total:</td>
              <td>{{ totalPrice }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="empty-cart">Your cart is empty!</div>
      </div>

      <div class="user-info">
        <h2>Customer Information</h2>
        <div v-for="item in info" :key="item.name" class="info-item">
          <span class="label">{{ item.name }}:</span>
          <span class="value">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('products', { productsAll: 'items' }),
    ...mapGetters('cart', { productsInCart: 'products' }),
    ...mapGetters('info', { info: 'info' }),

    products() {
      return this.productsAll.filter((p) =>
        this.productsInCart.includes(p.id_product)
      );
    },

    totalPrice() {
      return this.products.reduce((sum, p) => sum + p.price, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.order-result {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;

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
  .user-info {
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

    tr.total td {
      font-weight: bold;
      border-top: 2px solid #000;
    }
  }

  .empty-cart {
    text-align: center;
    color: #777;
    margin-top: 20px;
  }

  .user-info {
    display: grid;
    gap: 15px;

    .info-item {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #eee;

      .label {
        font-weight: bold;
        color: #333;
      }

      .value {
        color: #555;
      }
    }
  }
}
</style>
