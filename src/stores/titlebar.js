import { defineStore } from "pinia";

export const useTitlebarStore = defineStore("titlebar", {
  state: () => ({
    hasBorder: false,
    hasBackground: true,
    left: null,
    right: null,
    center: null,
  }),
  actions: {
    set(args) {
      this.hasBorder = args.hasBorder;
      this.hasBackground = args.hasBackground;
      this.left = args.left;
      this.right = args.right;
      this.center = args.center;
    },
  },
});
