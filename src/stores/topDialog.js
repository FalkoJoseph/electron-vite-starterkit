import { defineStore } from "pinia";

export const useTopDialogStore = defineStore("topDialog", {
  state: () => ({
    active: false,
  }),
  actions: {
    show() {
      this.active = true;
    },
    hide() {
      this.active = false;
    },
  },
});
