<template>
  <Transition name="sidebar">
    <div
      class="sidebar h-full w-full"
      v-if="$store.sidebar.active"
      :style="`width:${$store.sidebar.width};`"
    >
      <vue-resizable
        :minWidth="$store.sidebar.minWidth"
        :maxWidth="$store.sidebar.maxWidth"
        @resize:move="resizeSidebarMove"
        @resize:start="resizeSidebarStart"
        @resize:end="resizeSidebarEnd"
      >
        <div v-if="topPadding" class="title-drag h-[3.25rem]"></div>
        <div
          ref="content"
          @scroll.native="scrollSidebar"
          class="h-[calc(100%-53px)] overflow-y-auto pb-3 transition-shadow duration-500 ease-in-out"
          :class="[
            sidePadding ? 'px-2.5' : '',
            isScrolled ? 'shadow-line-t-dark' : '',
          ]"
        >
          <slot name="content"></slot>
        </div>
      </vue-resizable>
    </div>
  </Transition>
</template>

<script>
import { useSidebarStore } from "../../stores/sidebar";

import VueResizable from "vue-resizable";

export default {
  props: ["topPadding", "sidePadding"],
  components: {
    VueResizable,
  },
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    scrollSidebar() {
      if (this.$refs.content.scrollTop > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    resizeSidebarMove(e) {
      this.$store.sidebar.setWidth(e.width);
    },
    resizeSidebarStart() {
      document.body.classList.add("resize-active");
    },
    resizeSidebarEnd() {
      document.body.classList.remove("resize-active");
    },
  },
  created() {
    this.$store.sidebar = useSidebarStore();
  },
};
</script>

<style>
.sidebar {
  @apply absolute left-0 top-0 z-0 flex h-full;
}

.resizable-component {
  @apply h-full !important;
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 150ms ease-in-out;
}

.sidebar-enter-from,
.sidebar-leave-to {
  @apply -translate-x-[100%];
}
</style>
