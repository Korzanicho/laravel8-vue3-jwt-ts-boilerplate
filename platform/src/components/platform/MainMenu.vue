<template>
  <header class="MainMenu">
    <ul class="menu">
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/products">
        <li>Products</li>
      </router-link>
    </ul>
    <div>
      <span v-if="isLoading && !user">Loading</span>
      <span v-if="user">Hello, {{ user.name }}!</span>
      <button @click="handleLogout" class="button button--logout">
        Logout
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { usePendingActions } from "@/stores/pendingActions";

export default defineComponent({
  setup() {
    const authStore = useAuthStore();
    const pendingActionsStore = usePendingActions();

    const user = computed(() => authStore.getUser);

    if (!user.value) {
      authStore.setUser(authStore.getToken);
    }

    const isLoading = computed(() => {
      return pendingActionsStore.getList.includes("getUser");
    });

    const handleLogout = () => {
      authStore.logout();
    };

    return {
      user,
      isLoading,
      handleLogout,
    };
  },
});
</script>

<style scoped lang="sass">
.MainMenu
  display: flex
  justify-content: space-between
  .menu
    li
      display: inline-block
      margin: 0 10px
      padding: 10px
      border: 1px solid #ccc
      border-radius: 5px
      &:hover
        background-color: #eee
        cursor: pointer
  .button
    margin: 10px
    padding: 10px
    border: 1px solid #ccc
    border-radius: 5px
    &:hover
      background-color: #eee
      cursor: pointer
</style>
