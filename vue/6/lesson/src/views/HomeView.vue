<template>
  <div class="home">
    <progress-bar />
    <form>
      <input-text
          v-for="(item, index) in info"
          :key="item"
          :index="index"
          :item="item"
      />

      <button
          :disabled="getValidQuantity != 5"
          @click.prevent="goResult"
          class="send"
      >
        Send Data
      </button>
    </form>

    
    
  </div>
</template>

<script>
import InputText from '@/components/InputText.vue';
import ProgressBar from '@/components/ProgressBar.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    ProgressBar,
    InputText
  },
  computed: {
      ...mapGetters([
        'info',
        'getValidQuantity'
      ])
  },
  methods: {
    goResult() {
      this.$router.push('/result')
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 500px;
  display: grid;
  margin: 20px auto;
  gap: 20px;
}
.send {
  width: 100px;
  height: 30px;
  border: 1px gray solid;
  background-color: rgb(46, 140, 228);
  color: white;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
      background-color: rgb(32, 114, 190);
  }

  &:disabled {
      cursor: default;
      background-color: rgba(46, 140, 228, 0.7);
      color: rgb(219, 219, 219);
  }
}
</style>