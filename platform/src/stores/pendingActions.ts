import { defineStore } from "pinia";

export const usePendingActions = defineStore("pendingActions", {
  state: () => ({
    list: Array<string>(),
  }),

  getters: {
    getList: (state) => state.list,
  },

  actions: {
    addAction(actionName: string) {
      if (actionName) {
        this.list.push(actionName);
      }
    },
    removeAction(actionName: string) {
      if (actionName && this.list.includes(actionName)) {
        this.list = this.list.filter((action) => action !== actionName);
      }
    },
  },
});
