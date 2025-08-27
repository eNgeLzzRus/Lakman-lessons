<template>
  <div class="button-next">
    <button :disabled="!buttonActive" @click="$emit('click')">
      {{ currentQuestionIndex + 1 < totalQuestions ? 'Далее' : 'Завершить' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonActive: Boolean,
    currentQuestionIndex: Number,
    totalQuestions: Number
  }
};
</script>

<style scoped>
button {
  padding: 8px 15px;
  margin-top: 15px;
  cursor: pointer;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
