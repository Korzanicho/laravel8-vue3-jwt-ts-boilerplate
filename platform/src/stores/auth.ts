import { defineStore } from "pinia";
import axios from "axios";
import { usePendingActions } from "@/stores/pendingActions";

// const pendingActionsStore2 = usePendingActions();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: "",
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
    getToken: (state) => state.token,
    getUser: (state) => state.user,
  },

  actions: {
    async register(credentials: any) {
      try {
        const pendingActionsStore = usePendingActions();
        pendingActionsStore.addAction("register");

        await axios.post("//localhost/api/register", credentials);

        pendingActionsStore.removeAction("register");
      } catch (error) {
        console.error(error);
      }
    },

    async login(credentials: any) {
      const pendingActionsStore = usePendingActions();
      pendingActionsStore.addAction("login");
      await axios
        .post("//localhost/api/login", credentials)
        .then(async ({ data }) => {
          this.token = "Bearer " + data.token;
          localStorage.setItem("token", this.token);
          axios.defaults.headers.common["Authorization"] = this.token;
          this.setUser(data.token);
        });
      pendingActionsStore.removeAction("login");
    },

    async setUser(token: string) {
      const pendingActionsStore = usePendingActions();
      pendingActionsStore.addAction("getUser");
      await axios
        .post("//localhost/api/get_user", {
          token: token,
        })
        .then(async ({ data }) => {
          this.user = data.user;
        });
      pendingActionsStore.removeAction("getUser");
    },

    logout() {
      const pendingActionsStore = usePendingActions();
      pendingActionsStore.addAction("logout");
      localStorage.removeItem("token");
      location.reload();
      pendingActionsStore.removeAction("logout");
    },
  },
});
