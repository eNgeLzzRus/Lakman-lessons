<template>
  <input
    class="goods-search"
    :value="searchLine"
    @input="emit('update:searchLine', $event.target.value)"
    placeholder="Search"
  />
</template>

<script setup>
const props = defineProps({ searchLine: String });
const emit = defineEmits(['update:searchLine']);
</script>

<style scoped>
.goods-search {
  width: 250px;
  padding: 5px 20px;
  font-size: 16px;
  border-radius: 14px;
  border: 1px solid orangered;
  box-sizing: border-box;
}

.goods-search:focus {
  outline: none;
  border: 2px solid orangered;
}
</style>
