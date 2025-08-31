<template>
  <div id="app">
    <app-header /> 

    <div class="main-container">
      <nav-bar />  
      <div class="content">
        <router-view />   
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    AppHeader,
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Roboto;
  color: #2c3e50;
  
}

.main-container {
  padding-top: 120px; 
  display: flex;
  min-height: calc(100vh - 60px); 
}

nav-bar {
  width: 200px; 
  flex-shrink: 0; 
}


.content {
  flex: 1; 
  padding: 20px; 
  overflow-y: auto; 
}
</style>
