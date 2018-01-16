<template>
  <div>
    <p>The Other Counter is : {{ doubleCounter }}</p>
    <p>Number of Clicks : {{ stringCounter }}</p>
    <p>Own Way : {{ myOwnWay }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter',
      ]),
      myOwnWay() {
        return 'fucj the pllice';
      },
    },
      // computed: {
      //   counter() {
      //     return this.$store.getters.doubleCounter;
      //   },
      //   clicks() {
      //     return this.$store.getters.stringCounter;
      //   }
      // },
  };
</script>

<style>

</style>
