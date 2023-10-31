import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    defaultActiveLeft: false,
    activeLeft: false,
    defaultActiveRight: false,
    activeRight: false,
    width: {
      left: "216px",
      right: "216px",
    },
    minWidth: {
      left: 200,
      right: 200,
    },
    maxWidth: {
      left: 500,
      right: 500,
    },
    list: [],
    listRight: [],
  }),
  actions: {
    setActive(pos) {
      if (pos === "left") {
        this.activeLeft = !this.activeLeft;
        this.defaultActiveRight = false;
        this.defaultActiveLeft = false;
      } else {
        this.activeRight = !this.activeRight;
        this.defaultActiveRight = false;
        this.defaultActiveLeft = false;
      }
    },
    show(pos) {
      if (pos === "left") {
        this.activeLeft = true;
        this.defaultActiveLeft = true;
      } else {
        this.activeRight = true;
        this.defaultActiveRight = true;
      }
    },
    hide(pos) {
      if (pos === "left") {
        this.activeLeft = false;
        this.defaultActiveLeft = false;
      } else {
        this.activeRight = false;
        this.defaultActiveRight = false;
      }
    },
    setWidth(width, position) {
      if (position === "left") {
        this.width.left = `${width}px`;
      } else {
        this.width.right = `${width}px`;
      }
    },
    setLeftContent(args) {
      this.list = args.list;

      this.list.forEach((item) => {
        item.active = true;
      });
    },
    setRightContent(args) {
      this.listRight = args.list;

      this.listRight.forEach((item) => {
        item.active = true;
      });
    },
    toggleList(id, position) {
      if (position === "left") {
        this.list.forEach((item) => {
          if (item.id === id) {
            item.active = !item.active;
          }
        });
      } else {
        this.listRight.forEach((item) => {
          if (item.id === id) {
            item.active = !item.active;
          }
        });
      }
    },
  },
});
