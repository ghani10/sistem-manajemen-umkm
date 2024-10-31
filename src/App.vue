<template>
  <div id="app">
    <FormLogin />
  </div>
</template>

<script>
import FormLogin from './components/FormLogin.vue';

export default {
  components: {
    FormLogin,
  },
};
</script>

<style scoped>
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100svh;
  }
</style>