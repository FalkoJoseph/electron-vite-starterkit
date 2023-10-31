<template>
  <div class="input" :class="[icon ? 'has-icon' : '']">
    <ion-icon :icon="icon" v-if="icon"></ion-icon>
    <input
      type="text"
      class="shadow-depth"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import { IonIcon } from "@ionic/vue";

export default {
  props: ["icon", "placeholder", "modelValue"],
  emits: ["update:modelValue"],
  components: { IonIcon },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
.input {
  @apply relative w-full;

  &.has-icon input {
    @apply pl-8;
  }

  & ion-icon {
    @apply absolute left-0 top-0 m-1 ml-2 text-lg text-black/40 dark:text-white/40;
  }

  & input {
    @apply h-7 w-full appearance-none rounded-md border-0 bg-white px-3 pb-0.5 text-sm font-medium focus:outline-none dark:bg-gray-700/80;

    &:focus {
      box-shadow: inset 0 1px 0 0px rgba(255, 255, 255, 0.1),
        0 0 0 3px theme("colors.primary.500");
    }

    &::placeholder {
      @apply text-black/40 dark:text-white/40;
    }
  }
}
</style>
