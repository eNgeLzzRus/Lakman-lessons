<template>
  <div class="cart">
    <h1>Корзина</h1>
    <div class="cart-list">
        <CartItem
            v-for="good in cart"
            :key="good.id"
            :good="good"
            @less="less(good)"
            @more="more(good)"
            @remove="remove(good)"
        />
    </div>
    <div v-if="cart.length">
      <p class="total-price">Итого: {{ totalPrice }}</p>
      <button class="clear-cart" @click="clearCart">Очистить корзину</button>
    </div>
    <h2 v-else>Корзина пуста</h2>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CartItem from '@/components/CartItem.vue';
import { getCart, lessInCart, moreInCart, removeFromCart, clearCartApi } from '@/api';

const cart = ref([]);
const totalPrice = computed(() => cart.value.reduce((sum, i) => sum + i.price * i.quantity, 0));

function less(good) { lessInCart(good).then(d => cart.value = d); }
function more(good) { moreInCart(good).then(d => cart.value = d); }
function remove(good) { removeFromCart(good).then(d => cart.value = d); }
function clearCart() { clearCartApi().then(d => cart.value = d); }

onMounted(async () => { cart.value = await getCart(); });
</script>

<style scoped>
.cart {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.cart-list {
    display: flex;
    gap: 20px;
}

h1 { margin-bottom: 20px; }

.clear-cart {
  width: 160px;
  height: 50px;
  background-color: rgb(241, 47, 33);
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
}

.clear-cart:hover {
  background-color: white;
  color: rgb(241, 47, 33);
  border: 1px solid rgb(241, 47, 33);
}

.total-price {
  font-size: 22px;
  color: orangered;
  margin-bottom: 10px;
}
</style>
