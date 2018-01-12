<template>
  <div>
    <app-server-status v-for="(server,i) in 5" :key="i">{{server}}</app-server-status>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus';

  export default {
    components: {
      'app-server-status': ServerStatus,
    },
  };
</script>
