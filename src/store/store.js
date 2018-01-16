import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0,
  },
  getters: {
    doubleCounter: state => state.counter * 2,
    value: state => state.value,
    stringCounter: state => `${state.counter} clicks`,
  },
  mutations: {
    increment: (state, payload) => (state.counter += payload),
    decrement: state => state.counter--,
    updateValue: (state, payload) => (state.value = payload),
  },
  actions: {
    increment: ({ commit }) => {
      commit('increment');
    },
    decrement: ({ commit }) => {
      commit('decrement');
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    },
    updateValue: ({ commit }, payload) => { commit('updateValue', payload); },
  },
});
export default store;

