<template>
  <div>
    <app-header />
    <router-view/>
  </div>
  
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue'

  export default {
    components: {
      AppHeader,
    }
  }
</script>

<style lang="scss" >
#app {
  font-family: Roboto;
  font-weight: 500;
  color: #2c3e50;
}
</style>
