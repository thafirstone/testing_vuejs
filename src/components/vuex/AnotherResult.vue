<template>
  <p>The Other Counter is : {{ counter }}</p>
</template>

<script>

  export default {
      computed: {
        counter() {
          return this.$store.state.counter * 2;
        },
      },
  };
</script>

<style>

</style>
