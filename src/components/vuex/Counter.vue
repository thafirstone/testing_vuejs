<template>
  <div>
    <button @click="asyncIncrement({by: 10, duration: 500})" class="btn btn-primary">Increment</button>
    <button @click="asyncDecrement" class="btn btn-primary">Decrement</button>
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex';

  export default {
    methods: {
      ...mapMutations([
        'increment',
        'decrement',
      ]),
      ...mapActions([
        'asyncIncrement',
        'asyncDecrement',
      ]),
    },
    // methods: {
      // increment() {
        // this.$store.commit('increment');
      // },
      // decrement() {
        // this.$store.commit('decrement');
      // },
    // },
  };
</script>

<style>

</style>
