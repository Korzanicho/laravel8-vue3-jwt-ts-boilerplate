import { createApp } from "vue";
import { createPinia } from "pinia";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

const saveSession = () => {
  const token = localStorage.getItem("token");
  const authStore = useAuthStore();

  if (token) {
    authStore.token = token;
  }

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status == 401) {
        authStore.logout();
      }

      return Promise.reject(error);
    }
  );
};

const app = createApp(App);

app.use(createPinia());
app.use(saveSession);
app.use(router);

app.mount("#app");
