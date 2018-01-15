<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show= !show">Show Alert </button>
        <br>
        <br>
        <transition name="fade">
          <div v-if="!show" class="alert alert-info">
            This is some Info
          </div>
        </transition>
        <!-- <transition name="fade">
          <div v-if="show" class="alert alert-warning">
            This is some warning
          </div>
        </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
      };
    },
  };
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
