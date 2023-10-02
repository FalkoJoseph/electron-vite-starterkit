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
        <slot name="content"></slot>
      </vue-resizable>
    </div>
  </Transition>
</template>

<script>
import VueResizable from "vue-resizable";

export default {
  components: {
    VueResizable,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
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
};
</script>

<style>
.sidebar {
  @apply absolute left-0 top-0 z-0 flex h-full;
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
