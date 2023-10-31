import { defineStore } from "pinia";

export const useWindowStore = defineStore("window", {
  state: () => ({
    hasBackground: true,
    background: "",
    defaultBackground: "bg-white dark:bg-gray-800/80",
  }),
  getters: {
    getBackground() {
      if (!this.background || this.background === "default") {
        return this.defaultBackground;
      } else {
        return this.background;
      }
    },
  },
  actions: {
    set(args) {
      if (args.background) {
        this.background = args.background;
      }
      this.hasBackground = args.hasBackground;
    },
  },
});
