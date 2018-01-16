<template>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Vuex</h1>
      <app-another-result></app-another-result>
      <app-result></app-result>
      <hr>
      <app-counter></app-counter>
      <app-another-counter></app-another-counter>
      <hr>
      <!-- <input type="text" :value="value" @input="updateValue"> -->
      <input type="text" v-model="value">
      <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
  import Counter from './Counter';
  import Result from './Result';
  import AnotherResult from './AnotherResult';
  import AnotherCounter from './AnotherCounter';

  export default {
    computed: {
      value: {
        get() {
          return this.$store.getters.value;
        },
        set(value) {
          this.$store.dispatch('updateValue', value);
        }
      },
    },
    methods: {
      updateValue($event) {
        this.$store.dispatch('updateValue', $event.target.value);
      }
    },
    components: {
      appCounter: Counter,
      appResult: Result,
      appAnotherResult: AnotherResult,
      appAnotherCounter: AnotherCounter,
    },
  };
</script>

<style>

</style>
