import Vue from 'vue';
import Vuex from 'vuex';
import CounterStore from './modules/counter';
import ValueStore from './modules/value';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ...CounterStore.state,
    ...ValueStore.state,
  },
  getters: {
    ...CounterStore.getters,
    ...ValueStore.getters,
  },
  mutations: {
    ...CounterStore.mutations,
    ...ValueStore.mutations,
  },
  actions: {
    ...CounterStore.actions,
    ...ValueStore.actions,
  },
});
export default store;

