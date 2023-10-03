import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    active: false,
    width: "216px",
    minWidth: 200,
    maxWidth: 500,
  }),
  actions: {
    setActive() {
      this.active = !this.active;
    },
    setWidth(width) {
      this.width = `${width}px`;
    },
  },
});
