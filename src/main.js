// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Home from './components/first/Home';

Vue.config.productionTip = false;
Vue.component('app-servers', Home);
/* eslint-disable no-new */
const eventBus = new Vue({
  methods: {
    updateAge(age) {
      // console.log('dans lemit age ', age);
      this.$emit('update:userAge', age);
    },
    updateName(name) {
      // console.log('dans lemit name ', name);
      this.$emit('update:myName', name);
    },
    addQuote(quote) {
      this.$emit('add:newQuote', quote);
    },
  },
});

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    const s = JSON.stringify;
    // el.innerHTML = `name: ${s(binding.name)}<br>` + `value: ${s(binding.value)}<br>` + `expression: ${s(binding.expression)}<br>` + `argument: ${s(binding.arg)}<br>` + `modifiers: ${s(binding.modifiers)}<br>` + `vnode keys: ${Object.keys(vnode).join(', ')}`;
    el.innerHTML += ' toto';
    if (binding.modifiers.delayed) {
      console.log('pooppooop');
    }
    if (binding.arg === 'color') {
      el.style.backgroundColor = binding.value;
    }
  },
});

export default eventBus;

new Vue({
  el: '#app',
  router,
  ...App,
});

