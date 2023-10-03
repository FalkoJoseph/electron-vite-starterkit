import { defineStore } from "pinia";

export const useTopDialogStore = defineStore("topDialog", {
  state: () => ({
    active: false,
    component: null,
  }),
  actions: {
    set(args) {
      this.active = true;
      this.component = args.component;
    },
    hide() {
      this.active = false;
    },
  },
});
