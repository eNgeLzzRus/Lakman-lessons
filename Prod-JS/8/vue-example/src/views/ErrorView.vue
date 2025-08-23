<template>
  <div class="onError">
    <h1>Ошибка загрузки</h1>
    <p>Не удалось получить данные с сервера. Попробуйте обновить страницу позже.</p>
    <router-link to="/">
      <button>Вернуться в каталог</button>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.onError {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  gap: 20px;
}

h1 {
  font-size: 32px;
  color: orangered;
}

p {
  font-size: 18px;
  color: #555;
  max-width: 400px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background: orangered;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: white;
  color: orangered;
  border: 1px solid orangered;
}
</style>