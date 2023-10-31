<template>
  <div
    class="main relative z-10 h-screen w-full"
    :class="[
      $store.sidebar.activeLeft ? 'has-sidebar-left-open' : '',
      $store.sidebar.activeRight ? 'has-sidebar-right-open' : '',
      $store.sidebar.defaultActiveLeft || $store.sidebar.defaultActiveRight
        ? 'default-open'
        : '',
    ]"
  >
    <div class="main-wrapper flex h-screen flex-col">
      <!-- Titlebar -->
      <title-bar />

      <!-- Window Content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TitleBar from "./TitleBar.vue";

export default {
  components: {
    TitleBar,
  },
};
</script>

<style>
.main {
  &:not(.default-open) {
    transition: margin 150ms ease-in-out, width 150ms ease-in-out;

    & .main-wrapper {
      transition: padding 150ms ease-in-out, width 150ms ease-in-out;
    }
  }

  &.has-sidebar-left-open {
    margin-left: v-bind("$store.sidebar.width.left");

    @apply border-l border-black/10 dark:border-black/50;

    & .main-wrapper {
      padding-right: v-bind("$store.sidebar.width.left");
    }
  }

  &.has-sidebar-right-open {
    width: calc(100% - v-bind("$store.sidebar.width.right"));
  }
}
</style>
