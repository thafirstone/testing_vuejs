<template>
  <div>
    <!-- <app-servers></app-servers> -->
    <div class="container">
        <!-- <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New Quote</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                  <component :is="selectedComponent">
                    <p>Default content</p>
                  </component>
                </keep-alive>

                  <app-quote>
                    <h1 slot="title">{{ quoteTitle }}</h1>
                    <p>My wonderfull quote !!!</p>
                  </app-quote>
                <hr>
            </div>
        </div> -->
        <!-- <appHeader :quoteCount="wonderful.quotes.length" :maxQuotes="wonderful.maxQuotes"></appHeader>
        <appNewQuote></appNewQuote>
        <app-quote-grid :quotes.sync="wonderful.quotes" @removeQuote="removeQuote"></app-quote-grid>
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="alert alert-info">
              Info: Click on a Quote to delete it!
            </div>
          </div>
        </div> -->
        <!-- <app-form></app-form> -->
        <!-- <app-directives></app-directives> -->
        <app-transition></app-transition>
    </div>
  </div>
</template>

<script>
  import User from './components/communication/User';
  import Quote from './components/advanced/Quote';
  import Author from './components/advanced/Author';
  import New from './components/advanced/New';
  import QuoteGrid from './components/wonderful/QuoteGrid';
  import NewQuote from './components/wonderful/NewQuote';
  import Header from './components/wonderful/Header';
  import DefaultForm from './components/form/DefaultForm';
  import Directives from './components/directives/BuiltInDirectives';
  import Transition from './components/transition/Transition';
  import eventBus from './main';

  export default {
    components: {
      appUser: User,
      appQuote: Quote,
      appAuthor: Author,
      appNew: New,
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header,
      appForm: DefaultForm,
      appDirectives: Directives,
      appTransition: Transition,
    },
    data() {
      return {
        quoteTitle: 'Quote Title !',
        selectedComponent: 'appQuote',
        wonderful: {
          quotes: [
            'Just a Quote to see something',
            'Can stop wont stop',
          ],
          maxQuotes: 10,
        },
      };
    },
    methods: {
      removeQuote(i) {
        (this.wonderful.quotes).splice(i, 1);
      },
    },
    created() {
      eventBus.$on('add:newQuote', (quote) => {
        if (this.wonderful.quotes.length < this.wonderful.maxQuotes) {
          this.wonderful.quotes.push(quote);
        }
      });
    },
  };
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
