<template>
  <Transition name="dialog">
    <div
      class="absolute left-0 top-0 z-50 w-full"
      v-if="$store.topDialog.active"
      :class="[warning ? 'wiggle' : '']"
    >
      <div
        class="mx-auto max-w-xl rounded-b-md border-b border-l border-r border-black/30 bg-gray-800/90 shadow-xl backdrop-blur-xl"
      >
        <div class="p-5">
          <p class="text-base font-bold capitalize">
            <slot name="title"></slot>
          </p>
        </div>
        <div class="px-5 pb-5">
          <slot name="body"></slot>
        </div>
        <div class="flex justify-end space-x-3 border-t border-white/5 p-5">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>

  <div
    class="absolute left-0 top-0 z-40 h-full w-full"
    v-if="$store.topDialog.active"
    @click="warn"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      warning: false,
    };
  },
  computed: {},
  methods: {
    warn() {
      this.warning = true;
      setTimeout(() => {
        this.warning = false;
      }, 500);
    },
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
  @apply -translate-y-[110%];
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
