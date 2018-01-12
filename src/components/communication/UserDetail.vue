<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>UserName : {{ switchName() }}</p>
    <p>UserAge : {{ userAge }}</p>
    <p>UserAge : {{ age }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
  import eventBus from '../../main';

  export default {
    props: {
      myName: {
        type: String,
      },
      userAge: {
        type: Number,
      },
    },
    data() {
      return {
        age: this.userAge,
      };
    },
    methods: {
      switchName() {
        return this.myName.split('').reverse().join('');
      },
      resetName() {
        eventBus.updateName(this.myName === 'Max' ? 'Anna' : 'Max');
        // this.$emit('update:myName', this.myName === 'Max' ? 'Anna' : 'Max');
      },
    },
    created() {
      // eventBus.$on('update:userAge', (age) => {
      //   this.age = age;
      // });
    },
  };
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
