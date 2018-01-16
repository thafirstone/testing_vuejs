<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="user.username" id="username" class="form-control" type="text">
          <label for="mail">Email</label>
          <input v-model="user.email" id="mail" class="form-control" type="email">
          <br>
          <button class="btn btn-primary" @click="submit">Submit</button>
          <hr>
          <input class="form-control" type="text" v-model="node">
          <br>
          <button class="btn btn-primary" @click="getData">Get data</button>
          <ul class="list-group">
            <li class="list-group-item" v-for="(user, key) in users" :key="key" v-if="user">{{user.username }}: {{user.email}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: '',
        },
        users: [],
        resource: {},
        node: 'alternative',
      };
    },
    methods: {
      submit() {
        // console.log(this.user);
        // this.$http.post('fuckery.json', this.user)
        //   .then((response) => {
        //     console.log(response);
        //   }, (err) => {
        //     console.log(err);
        //   });
        this.resource.saveAlt({ node: this.node }, this.user);
      },
      getData() {
        // console.log(this.user);
        // this.$http.get('fuckery.json')
        //   // .then((response) => {
        //   //   return response.json();
        //   // })
        //   .then((response) => {
        //     this.users = response.json();
        //     console.log('final :', response);
        //   });
        // this.resource.retrieve()
        // .then((response) => {
        //   this.users = response.json();
        //   console.log('final :', response);
        // });
        this.resource.getData({ node: this.node })
          .then((response) => {
            this.users = response.json();
            // console.log('final :', response);
          });
      },
    },
    created() {
      // this.getData();
      const customActions = {
        retrieve: { method: 'GET', url: 'fuckery.json' },
        getData: { method: 'GET' },
        save: { method: 'POST', url: 'fuckery.json' },
        // saveAlt: {method: 'POST', url: 'alternative.json'},
        saveAlt: { method: 'POST', url: '{node}.json' },
      };

      this.resource = this.$resource('{ node }.json', { }, customActions);
    },
    beforeMount() {
      this.getData();
    },
  };
</script>

<style>

</style>
