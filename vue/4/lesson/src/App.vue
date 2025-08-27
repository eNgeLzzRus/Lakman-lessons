<template>
  <div class="main">
    <div v-if="currentQuestionIndex < questions.length" class="question">
      <test-header :title="questions[currentQuestionIndex].title" />
      <test-answers
        :answers="questions[currentQuestionIndex].answers"
        :type="questions[currentQuestionIndex].type"
        v-model="myAnswers[currentQuestionIndex]"
      />
      <button-next
        :button-active="isAnswerSelected(currentQuestionIndex)"
        :current-question-index="currentQuestionIndex"
        :total-questions="questions.length"
        @click="nextQuestion"
      />
    </div>
    
    <div v-else class="result-table">
      <result-table
        :questions="questions"
        :answers="myAnswers"
      />
    </div>
  </div>
</template>

<script>
import TestHeader from './components/Header.vue';
import TestAnswers from './components/Answers.vue';
import ResultTable from './components/ResultTable.vue';
import ButtonNext from './components/ButtonNext.vue';

export default {
  components: { TestHeader, TestAnswers, ResultTable, ButtonNext },
  data() {
    return {
      questions: [
        {
          type: 'radio',
          title: 'Какой тег задаёт ссылку?',
          answers: ['a', 'div', 'span', 'img'],
        },
        {
          type: 'checkbox',
          title: 'Какие из этих тегов строчные?',
          answers: ['a', 'div', 'span', 'img'],
        }
      ],
      myAnswers: {}, 
      currentQuestionIndex: 0,
    };
  },
  created() {
    this.questions.forEach((q, i) => {
      this.myAnswers[i] = q.type === 'checkbox' ? [] : '';
    });
  },
  methods: {
    isAnswerSelected(index) {
      const answer = this.myAnswers[index];
      if (this.questions[index].type === 'checkbox') {
        return Array.isArray(answer) && answer.length > 0;
      } else {
        return answer !== '' && answer !== undefined;
      }
    },
    nextQuestion() {
      if (this.isAnswerSelected(this.currentQuestionIndex)) {
        this.currentQuestionIndex++;
      }
    }
  }
};
</script>

<style scoped>
.main {
  width: 90%;
  margin: 20px auto;
}
</style>
