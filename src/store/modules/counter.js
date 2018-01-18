import * as types from './../types';

const state = {
  counter: 0,
};

const getters = {
  [types.DOUBLE_COUNTER]: state => state.counter * 2,
  [types.STRING_COUNTER]: state => `${state.counter} clicks`,
};

const mutations = {
  increment: (state, payload) => (state.counter += payload),
  decrement: state => state.counter--,
};

const actions = {
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
};


export default {
  state, getters, mutations, actions,
};
