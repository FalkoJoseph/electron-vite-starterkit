<template>
  <div
    class="main relative z-10 h-screen w-full"
    :class="[$store.sidebar.active ? 'has-sidebar-open' : '']"
  >
    <div class="main-wrapper flex h-screen flex-col">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style>
.main {
  transition: margin 150ms ease-in-out;

  & .main-wrapper {
    transition: padding 150ms ease-in-out;
  }

  &.has-sidebar-open {
    margin-left: v-bind("$store.sidebar.width");

    & .main-wrapper {
      padding-right: v-bind("$store.sidebar.width");
    }

    @apply border-l border-black/50;

    box-shadow: inset 1px 0 0 0 rgba(255, 255, 255, 0.05);
  }
}
</style>
