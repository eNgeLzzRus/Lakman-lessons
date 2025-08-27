<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th>Вопрос</th>
          <th>Ваш ответ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(question, index) in questions" :key="index">
          <td>{{ question.title }}</td>
            <td>
                <span v-if="question.type === 'radio'">
                    {{ answers[index] || 'No answer' }}
                </span>
                <span v-else>
                    <span v-if="!answers[index] || answers[index].length === 0">No answer</span>
                    <span v-else>{{ answers[index].join(', ') }}</span>
                </span>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    questions: Array,
    answers: Object,
  }
};
</script>

<style scoped>
.table {
  width: 500px;
  margin: 20px auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
td, th {
  border: 1px solid #ccc;
  padding: 8px 12px;
}
td:first-child {
  width: 30%;
}
</style>
