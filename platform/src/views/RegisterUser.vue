<template>
  <div class="RegisterUser">
    <TheHeader />
    <TheWelcome />
    <form @submit.prevent="handleRegiser" class="form">
      <div class="form__element">
        <label for="name" class="form__label"> Name: </label>
        <br />
        <input
          v-model="form.name"
          type="text"
          name="name"
          value
          class="form__input"
        />
      </div>
      <div class="form__element">
        <label for="email" class="form__label"> Email: </label>
        <br />
        <input
          v-model="form.email"
          type="email"
          name="email"
          value
          class="form__input"
        />
      </div>
      <div class="form__element">
        <label for="password" class="form__label"> Password: </label>
        <br />
        <input
          v-model="form.password"
          type="password"
          name="password"
          value
          class="form__input"
        />
      </div>
      <button type="submit" name="button" class="form__button">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, computed } from "vue";
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
    const form = reactive({
      name: "",
      email: "",
      password: "",
    });

    const authStore = useAuthStore();
    const pendingActionsStore = usePendingActions();
    const router = useRouter();

    const isLoading = computed(() =>
      pendingActionsStore.getList.includes("login")
    );

    const handleRegiser = () => {
      authStore
        .register({
          name: form.name,
          email: form.email,
          password: form.password,
        })
        .then(() => {
          router.push({ name: "login" });
        });
    };

    return {
      form,
      isLoading,
      handleRegiser,
    };
  },
});
</script>

<style scoped lang="sass">
.RegisterUser
  .form
    width: 450px
    max-width: 100%
    margin: 20px auto
    display: flex
    flex-direction: column

    &__element
      flex-basis: 100%

    &__input
      width: 100%

    &__button
      margin-top: 20px
</style>
