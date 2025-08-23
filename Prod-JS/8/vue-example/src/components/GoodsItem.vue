<template>
  <div class="goods-item">
    <h3>{{ good.title }}</h3>
    <p>{{ good.price }}</p>
    <div v-if="inCart" class="cart-selection">
      <div class="cart-info">
        <button @click="emit('less')">-</button>
        <span>{{ quantity }}</span>
        <button @click="emit('more')">+</button>
      </div>
      <button class="remove" @click="emit('remove')">Удалить из корзины</button>
    </div>
    <div v-else class="cart-selection">
      <button class="add" @click="emit('add')">Добавить в корзину</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ good: Object, inCart: Boolean, quantity: Number });
const emit = defineEmits(['less','more','remove','add']);
</script>

<style scoped>
.goods-item {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 2px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: 0.2s;
}

.goods-item:hover {
  background-color: #f3f3f3;
}

.goods-item h3 {
  margin: 0;
  font-size: 24px;
}

.goods-item p {
  margin: 5px 0;
  font-size: 20px;
  color: orangered;
}

.cart-selection {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-info span {
  font-size: 18px;
}

.cart-info button,
.remove,
.add {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid orangered;
  background: none;
  cursor: pointer;
  transition: 0.2s;
}

.cart-info button:hover,
.remove:hover,
.add:hover {
  background-color: orangered;
  color: white;
}

.remove, .add {
  width: auto;
  border-radius: 10px;
  padding: 0 10px;
}
</style>
