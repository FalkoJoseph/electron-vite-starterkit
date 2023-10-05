import { defineStore } from "pinia";

export const useTitlebarStore = defineStore("titlebar", {
  state: () => ({
    hasBorder: false,
    hasBackground: true,
    component: null,
  }),
  actions: {
    set(args) {
      this.hasBorder = args.hasBorder;
      this.hasBackground = args.hasBackground;
      this.component = args.component;
    },
  },
});
