<template>
  <div class="catalog">
    <GoodsItem
      v-for="good in filteredGoods"
      :key="good.id"
      :good="good"
      :in-cart="isInCart(good)"
      :quantity="getQuantity(good)"
      @add="add(good)"
      @more="more(good)"
      @less="less(good)"
      @remove="remove(good)"
    />
    <h1 v-if="filteredGoods.length === 0">Нет данных</h1>
    <p class="total-price">Общая стоимость: {{ totalPrice }}</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import GoodsItem from '@/components/GoodsItem.vue';
import { getCatalog, getCart, addToCart, moreInCart, lessInCart, removeFromCart } from '@/api';

const props = defineProps({ searchLine: String });
const router = useRouter();

const goods = ref([]);
const filteredGoods = ref([]);
const cart = ref([]);

const totalPrice = computed(() =>
  cart.value.reduce((sum, i) => sum + i.price * i.quantity, 0)
);

function isInCart(good) {
  return cart.value.some(i => i.id === good.id);
}
function getQuantity(good) {
  const item = cart.value.find(i => i.id === good.id);
  return item ? item.quantity : 0;
}

function add(good) { addToCart(good).then(d => cart.value = d); }
function more(good) { moreInCart(good).then(d => cart.value = d); }
function less(good) { lessInCart(good).then(d => cart.value = d); }
function remove(good) { removeFromCart(good).then(d => cart.value = d); }

onMounted(async () => {
  try {
    goods.value = await getCatalog();
    filteredGoods.value = goods.value;
    cart.value = await getCart();
  } catch (e) {
    console.error("Ошибка при загрузке:", e);
    router.push("/error");
  }
});

watch(() => props.searchLine, (val) => {
  filteredGoods.value = !val.trim()
    ? goods.value
    : goods.value.filter(g => g.title.toLowerCase().includes(val.toLowerCase()));
});
</script>

<style scoped>
.catalog {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.total-price {
  font-size: 22px;
  color: orangered;
  margin-top: 20px;
  width: 100%;
  text-align: center;
}
</style>
