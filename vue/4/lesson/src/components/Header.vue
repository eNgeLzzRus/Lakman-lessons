<template>
  <header>
    <h2>{{ title }}</h2>
    <hr />
  </header>
</template>

<script>
export default {
  props: { title: String }
};
</script>

<style scoped>
h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
