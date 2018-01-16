<template>
  <div class="component">
    <h1>The User Component for id: {{id}}</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name</button>
    <p>My name is {{ name }}</p>
    <p>My age is {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :userAge="age"></app-user-detail> -->
        <app-user-detail
          :myName.sync="name"
          :userAge.sync="age"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :userAge.sync="age"
          :updateFn="updateAge"></app-user-edit>
      </div>
    </div>
    <button  class="btn btn-warning" @click="navigateToHome">Go Home</button>
  </div>
</template>

<script>
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
import eventBus from '../../main';

export default {
  data() {
    return {
      name: 'Max',
      age: 27,
      // id: this.$route.params.id,
    };
  },
  props: ['id'],
  methods: {
    changeName() {
      // this.name = 'Anna';
      this.name = (this.name === 'Max') ? 'Anna' : 'Max';
    },
    updateAge() {
      this.age = 30;
    },
    navigateToHome() {
      this.$router.push({ path: '/' });
    },
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id || from.params.id;
    },
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },

  created() {
    eventBus.$on('update:userAge', (age) => {
      this.age = age;
    });
    eventBus.$on('update:myName', (name) => {
      this.name = name;
    });
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
