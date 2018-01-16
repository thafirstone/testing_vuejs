<template>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Vuex</h1>
      <app-another-result></app-another-result>
      <app-result></app-result>
      <app-counter></app-counter>
    </div>
  </div>
</template>

<script>
  import Counter from './Counter';
  import Result from './Result';
  import AnotherResult from './AnotherResult';

  export default {
    components: {
      appCounter: Counter,
      appResult: Result,
      appAnotherResult: AnotherResult,
    },
  };
</script>

<style>

</style>
