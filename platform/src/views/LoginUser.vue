<template>
  <div class="LoginUser">
    <TheHeader />
    <TheWelcome />
    <form @submit.prevent="handleLogin" class="login-form" v-if="!isLoading">
      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />
      <br />
      <label for="password"> Password: </label>
      <input v-model="password" type="password" name="password" value />
      <br />
      <button type="submit" name="button">Login</button>
    </form>
    <div v-else>logging in...</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { usePendingActions } from "@/stores/pendingActions";
import TheWelcome from "@/components/TheWelcome.vue";
import TheHeader from "@/components/platform/TheHeader.vue";

export default defineComponent({
  components: {
    TheWelcome,
    TheHeader,
  },

  setup() {
    const email = ref("");
    const password = ref("");
    const errors = ref([]);

    const authStore = useAuthStore();
    const pendingActionsStore = usePendingActions();
    const router = useRouter();

    const isLoading = computed(() =>
      pendingActionsStore.getList.includes("login")
    );

    const handleLogin = () => {
      authStore
        .login({
          email: email.value,
          password: password.value,
        })
        .then(() => {
          router.push("/products");
        });
    };

    return {
      email,
      errors,
      password,
      isLoading,
      handleLogin,
    };
  },
});
</script>

<style lang="sass">
.LoginUser
  .login-form
    width: 550px
    mas-width: 100%
    margin: 20px auto
    display: flex
    justify-content: space-between
</style>
