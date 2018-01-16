<template>
  <div>
    <br>
    <p>Another Counter</p>
    <button @click="increment" class="btn btn-primary">Increment</button>
    <button @click="decrement" class="btn btn-primary">Decrement</button>
  </div>
</template>

<script>

  export default {
    methods: {
      increment() {
        this.$store.commit('increment', 1);
      },
      decrement() {
        this.$store.commit('decrement');
      },
    },
  };
</script>

<style>

</style>
