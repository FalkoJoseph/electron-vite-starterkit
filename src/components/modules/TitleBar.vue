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
    <div
      class="title-actions flex w-1/3 items-center justify-start space-x-2 transition-all duration-150 ease-in-out"
      :class="[$store.sidebar.active ? '' : 'pl-[4.5rem]']"
    >
      <Component :is="$store.titlebar.left" />
    </div>

    <div class="w-1/3">
      <Component :is="$store.titlebar.center" />
    </div>

    <div class="title-actions flex w-1/3 items-center justify-end space-x-2">
      <Component :is="$store.titlebar.right" />
    </div>
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
