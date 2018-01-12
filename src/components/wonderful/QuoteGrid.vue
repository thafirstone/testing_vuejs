<template>
  <div class="row">
        <appQuoteCreate v-for="(quote,i) in quotes" :key="i" @click.native="removeQuote(i)">
          {{ quote }}
        </appQuoteCreate>
  </div>
</template>

<script>
  import QuoteCreate from './QuoteCreate';
  // import eventBus from '../../main';

  export default {
    props: ['quotes'],
    components: {
      appQuoteCreate: QuoteCreate,
    },
    methods: {
      removeQuote(i) {
        this.$emit('removeQuote', i);
      },
    },
  };
</script>

<style>

</style>
