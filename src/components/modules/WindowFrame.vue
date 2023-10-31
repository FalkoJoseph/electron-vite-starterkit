<template>
  <div
    class="relative z-0 flex-1 overflow-hidden overflow-y-auto window"
    :class="[$store.window.hasBackground ? $store.window.getBackground : '']"
  >
    <TopDialog />

    <slot />
  </div>
</template>

<script>
import { useWindowStore } from "@/stores/window";

import TopDialog from "./TopDialog.vue";

export default {
  created() {
    this.$store.window = useWindowStore();
  },
  components: {
    TopDialog,
  },
};
</script>
