<template>
  <nav>
    <router-link to="/"><button>Каталог</button></router-link>
    <GoodsSearch 
      :searchLine="searchLine" 
      @update:searchLine="$emit('update:searchLine', $event)" 
    />
    <router-link to="/cart"><button>Корзина</button></router-link>
  </nav>
</template>

<script setup>
import GoodsSearch from './GoodsSearch.vue';
const props = defineProps({ searchLine: String });
const emit = defineEmits(['update:searchLine']);
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 20px 30px;
  background-color: rgb(252, 230, 221);
  position: sticky;
  top: 0;
  z-index: 100;
  border-radius: 20px;
}

button {
  width: 120px;
  height: 40px;
  border: 1px solid orangered;
  border-radius: 14px;
  background: white;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

button:hover {
  background-color: orangered;
  color: white;
}
</style>
