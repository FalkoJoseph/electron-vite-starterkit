<template>
  <div
    class="title-drag relative z-10 flex min-h-[53px] items-center justify-between px-3 text-center text-sm text-white/80 transition-shadow duration-100 hover:shadow"
    :class="[
      $store.titlebar.hasBorder ? 'border-b border-white/10' : '',
      $store.titlebar.hasBackground
        ? 'border-b border-black bg-gray-700/50'
        : 'border-b border-transparent bg-gray-800/80',
      $store.titlebar.subTitle ? 'py-2' : 'p-1',
    ]"
  >
    <Component :is="$store.titlebar.component" />
  </div>
</template>

<script>
import { useTitlebarStore } from "@/stores/titlebar";

export default {
  created() {
    this.$store.titlebar = useTitlebarStore();
  },
};
</script>

<style>
.title-drag {
  -webkit-app-region: drag;
}

.title-actions * {
  -webkit-app-region: no-drag;
}
</style>
