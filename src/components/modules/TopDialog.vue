<template>
  <Transition name="dialog">
    <div
      class="absolute top-0 left-0 z-50 w-full pointer-events-none"
      v-if="$store.topDialog.active"
      :class="[warning ? 'wiggle' : '']"
    >
      <div
        class="max-w-xl mx-auto border-b border-l border-r shadow-xl pointer-events-auto rounded-b-md border-black/20 bg-white/70 backdrop-blur-xl dark:border-black/30 dark:bg-gray-800/90"
      >
        <Component :is="$store.topDialog.component" />
      </div>
    </div>
  </Transition>

  <div
    class="fixed top-0 left-0 z-40 w-full h-full"
    v-if="$store.topDialog.active"
    @click="warn"
  ></div>
</template>

<script>
import { useTopDialogStore } from "@/stores/topDialog";

export default {
  data() {
    return {
      warning: false,
    };
  },
  methods: {
    warn() {
      this.warning = true;
      setTimeout(() => {
        this.warning = false;
      }, 500);
    },
  },
  created() {
    this.$store.topDialog = useTopDialogStore();
  },
};
</script>

<style>
.dialog-enter-active,
.dialog-leave-active {
  transition: all 500ms cubic-bezier(0.5, 0.5, 0, 1);
}

.dialog-enter-from,
.dialog-leave-to {
  @apply -translate-y-[200%];
}

.wiggle {
  animation: wiggle 200ms ease-in-out;
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(0deg) scale(1.05);
  }
  50% {
    transform: rotate(0deg) scale(1);
  }
  75% {
    transform: rotate(0deg) scale(1.05);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
</style>
