<template>
  <div class="cart-item">
    <h3>{{ good.title }}</h3>
    <p>{{ good.price }}</p>
    <div class="cart-selection">
      <div class="cart-info">
        <button @click="emit('less')">-</button>
        <span>{{ good.quantity }}</span>
        <button @click="emit('more')">+</button>
      </div>
      <button class="remove" @click="emit('remove')">Удалить</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ good: Object });
const emit = defineEmits(['less','more','remove']);
</script>

<style scoped>
.cart-item {
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

.cart-item:hover { background-color: #f3f3f3; }

.cart-item h3 { margin: 0; font-size: 24px; }
.cart-item p { margin: 5px 0; font-size: 20px; color: orangered; }

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

.cart-info span { font-size: 18px; }

.cart-info button,
.remove {
  width: 30px;
  height: 30px;
  border: 1px solid orangered;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  transition: 0.2s;
}

.remove {
    border: none;
    background: orangered;
    color: white;
}

.cart-info button:hover { 
    background-color: orangered;
    color: white; 
}
.remove:hover { 
    background-color: white;
    color: black;
    border: 1px solid orangered;
}

.remove { width: auto; padding: 0 10px; border-radius: 10px; }
</style>
