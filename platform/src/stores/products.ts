import { defineStore } from "pinia";
import axios from "axios";
import { usePendingActions } from "@/stores/pendingActions";

const pendingActionsStore = usePendingActions();

export const useProductsStore = defineStore("products", {
  state: () => ({
    list: null,
  }),

  getters: {
    getList: (state) => state.list,
  },

  actions: {
    async setProducts() {
      try {
        pendingActionsStore.addAction("setProducts");
        const result = await axios.get("//localhost/api/products");
        this.list = result.data;
        pendingActionsStore.removeAction("setProducts");
      } catch (error) {
        console.error(error);
      }
    },
  },
});
