<template>
  <div class="question">
    <div v-for="(item, index) in answers" :key="index">
      <div v-if="type === 'radio'" class="radio">
        <input
          type="radio"
          :id="'Answer' + index"
          :value="item"
          :checked="modelValue === item"
          @change="$emit('update:modelValue', item)"
        />
        <label :for="'Answer' + index">{{ item }}</label>
      </div>

      <div v-else class="check">
        <input
          type="checkbox"
          :id="'Answer-' + index"
          :value="item"
          :checked="modelValue.includes(item)"
          @change="toggleCheckbox(item)"
        />
        <label :for="'Answer-' + index">{{ item }}</label>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    answers: Array,
    modelValue: { type: [String, Array], default: () => [] },
  },
  emits: ['update:modelValue'],
  methods: {
    toggleCheckbox(val) {
      let newValue = Array.isArray(this.modelValue) ? [...this.modelValue] : [];
      const idx = newValue.indexOf(val);
      if (idx > -1) newValue.splice(idx, 1);
      else newValue.push(val);
      this.$emit('update:modelValue', newValue);
    },
  },
};
</script>

<style scoped>
.radio, .check {
  margin-bottom: 5px;
}
</style>
