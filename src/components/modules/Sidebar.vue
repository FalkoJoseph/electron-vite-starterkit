<template>
  <Transition name="sidebar">
    <div
      v-if="
        ($store.sidebar.activeLeft && position === 'left') ||
        ($store.sidebar.activeRight && position === 'right')
      "
      class="sidebar h-full w-full"
      :class="[
        $store.sidebar.defaultActiveLeft || $store.sidebar.defaultActiveRight
          ? 'default-open'
          : '',
        position === 'left' ? 'is-left' : 'is-right',
      ]"
      :style="sidebarWidth"
    >
      <vue-resizable
        :minWidth="$store.sidebar.minWidth[position]"
        :maxWidth="$store.sidebar.maxWidth[position]"
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
          <div class="h-full space-y-5" v-if="position === 'left'">
            <Component
              :is="item.component"
              v-for="(item, index) in $store.sidebar.list"
              :key="index"
            />
          </div>

          <div class="h-full space-y-5" v-if="position === 'right'">
            <Component
              :is="item.component"
              v-for="(item, index) in $store.sidebar.listRight"
              :key="index"
            />
          </div>
        </div>
      </vue-resizable>
    </div>
  </Transition>
</template>

<script>
import { useSidebarStore } from "@/stores/sidebar";

import VueResizable from "vue-resizable";

export default {
  props: ["topPadding", "sidePadding", "position"],
  components: {
    VueResizable,
  },
  computed: {
    sidebarWidth() {
      return {
        width: `${this.$store.sidebar.width[this.position]}`,
      };
    },
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
      this.$store.sidebar.setWidth(e.width, this.position);
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
  @apply absolute top-0 z-50 flex h-full;

  &.is-left {
    @apply left-0;
  }

  &.is-right {
    @apply right-0 border-l border-black/10 dark:border-black/50;

    & .resizable-component {
      @apply left-auto !important;
    }
  }

  &:not(.default-open) {
    transition: transform 150ms ease-in-out;
  }
}

.resizable-component {
  @apply h-full !important;
}

.sidebar-leave-active {
  transition: transform 150ms ease-in-out;
}

.sidebar-enter-from,
.sidebar-leave-to {
  &.is-left {
    @apply -translate-x-[100%];
  }

  &.is-right {
    @apply translate-x-[100%];
  }
}
</style>
