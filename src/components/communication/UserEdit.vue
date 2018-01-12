<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>UserAge : {{ userAge }}</p>
    <button @click="updateFn()">Edit Age Back Event</button>
    <button @click="editAge()">Edit Age Global Event</button>
    <!-- <input type="text" v-model='myName'> -->
  </div>
</template>

<script>
  import eventBus from '../../main';

  export default {
    props: {
      userAge: {
        type: Number,
      },
      updateFn: Function,
    },
    methods: {
      editAge() {
        eventBus.updateAge(this.userAge === 30 ? 27 : 30);
      },
    },
  };
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
