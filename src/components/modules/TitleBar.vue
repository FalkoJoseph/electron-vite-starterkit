<template>
  <div
    class="title-drag relative z-10 flex min-h-[53px] items-center justify-between px-3 text-center text-sm text-white/80 transition-all duration-100 hover:shadow"
    :class="[
      hasBorder ? 'border-b border-white/10' : '',
      hasBackground ? 'border-b border-black bg-gray-700/70' : 'bg-gray-800',
      subTitle ? 'py-2' : 'p-1',
    ]"
  >
    <div
      class="title-actions flex w-1/3 justify-start space-x-2 transition-all duration-150 ease-in-out"
      :class="[$store.sidebar.active ? '' : 'pl-[4.5rem]']"
    >
      <slot name="left"></slot>
    </div>
    <div class="w-1/3">
      <p class="font-bold">{{ title }}</p>
      <p class="text-xs text-white/50" v-if="subTitle">{{ subTitle }}</p>
    </div>
    <div class="title-actions flex w-1/3 justify-end space-x-2">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subTitle", "hasBorder", "hasBackground"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
