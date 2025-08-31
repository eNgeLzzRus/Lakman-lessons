import { createStore } from 'vuex'

export default createStore({
  state: {
    info: [
      {
          name: 'Name',
          value: '',
          pattern: /^[a-zA-Z]{2,30}$/,
          isValid: false
      },
      {
          name: 'Phone',
          value: '',
          pattern: /^[0-9]{7,14}$/,
          isValid: false
      },
      {
          name: 'Email',
          value: '',
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          isValid: false
      },
      {
          name: 'Some Field 1',
          value: '',
          pattern: /.+/,
          isValid: false
      },
      {
          name: 'Some Field 2',
          value: '',
          pattern: /.+/,
          isValid: false
      },
    ],
  },
  getters: {
    info(state) {
      return state.info;
    },
    getValidQuantity(state) {
      return state.info.filter(item => item.pattern.test(item.value)).length
    }
  },
  mutations: {
    setValue(state, payload) {
      const item = state.info[payload[0]];
      item.value = payload[1];
      item.isValid = item.pattern.test(item.value);
    },
    changeQuantity(state, payload) {
      if (state.validQuantity > 0) {
        return state.validQuantity += payload;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
