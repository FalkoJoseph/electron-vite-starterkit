<template>
  <div
    class="window relative z-0 flex-1 overflow-hidden overflow-y-auto bg-gray-800/80"
  >
    <TopDialog />

    <slot />
  </div>
</template>

<script>
import TopDialog from "./TopDialog.vue";

export default {
  components: {
    TopDialog,
  },
};
</script>
