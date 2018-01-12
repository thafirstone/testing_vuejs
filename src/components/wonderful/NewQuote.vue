<template>
  <div class="row">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label for="quoter">Quote</label>
        <textarea v-model="quote" class="form-control" name="quoter" rows="3">
        </textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="addQuote">Add new quote</button>
      </div>
  </div>
</template>

<script>
  import eventBus from '../../main';

  export default {
    data() {
      return {
        quote: '',
      };
    },
    methods: {
      addQuote() {
        if (this.quote) {
          eventBus.addQuote(this.quote);
          this.quote = '';
        }
      },
    },
  };
</script>

<style>

</style>
