<template>
  <div class="TheWelcome">
    <h1>Welcome to Vue + Laravel App</h1>
    To use this app you'll need to
    <router-link to="/login">Login</router-link>
    or
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="sass">
.TheWelcome
  width: 500px
  max-width: 100%
  margin: 0 auto
</style>
