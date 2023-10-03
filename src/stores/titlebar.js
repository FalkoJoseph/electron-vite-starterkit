import { defineStore } from "pinia";

export const useTitlebarStore = defineStore("titlebar", {
  state: () => ({
    title: "",
    subTitle: "",
    hasBorder: false,
    hasBackground: true,
    left: null,
    right: null,
  }),
  actions: {
    setTitlebar(args) {
      this.hasTitle = args.hasTitle;
      this.title = args.title;
      this.subTitle = args.subTitle;
      this.hasBorder = args.hasBorder;
      this.hasBackground = args.hasBackground;
      this.left = args.left;
      this.right = args.right;
    },
  },
});
