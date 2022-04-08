<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style lang="sass">
@import "@/assets/base.css"

.container
  max-width: 100%
  width: 1048px
  margin: 0 auto
</style>
