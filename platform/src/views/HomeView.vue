<template>
  <main class="HomeView">
    <TheHeader />
    <MainMenu />

    <h1>Laravel8 + Vue3 with JWT Auth app</h1>
    <p>
      Basic boilerplate for full web app (api + platform) based on Laravel8,
      Vue3, JWT Auth.
    </p>
    <h2>What is inside?</h2>
    <ul>
      <li><b>Laravel</b>^8.65 -> api</li>
      <li><b>Vue</b>^4.0.12 -> platform (views)</li>
      <li><b>Pinia</b>^2.0.11 -> data store</li>
      <li><b>Vite</b>^2.8.4 -> build tool</li>
      <li><b>vitest</b>^0.5.0 -> unit-test framework</li>
      <li><b>eslint</b>^8.5.0 -> code analyzer</li>
      <li><b>prettier</b>^2.5.1 -> code formatter</li>
    </ul>
  </main>
</template>

<script lang="ts">
import TheHeader from "@/components/platform/TheHeader.vue";
import MainMenu from "@/components/platform/MainMenu.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    MainMenu,
    TheHeader,
  },
});
</script>
