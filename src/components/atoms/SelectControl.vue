<template>
  <div class="select">
    <select
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <slot></slot>
    </select>
    <div class="select-icon">
      <div>
        <ion-icon :icon="chevronUpOutline"></ion-icon>
        <ion-icon :icon="chevronDownOutline"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { chevronDownOutline, chevronUpOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";

export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  components: { IonIcon },
  data() {
    return {
      chevronUpOutline,
      chevronDownOutline,
      value: "",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style>
.select {
  @apply relative inline-block overflow-hidden rounded-md;

  & .select-icon {
    @apply pointer-events-none absolute right-0 top-0 mr-[0.1rem] flex h-full w-5 scale-75 items-center rounded-md bg-primary-500 leading-none;

    & > div {
      @apply -mt-[0.2rem] ml-[0.11rem];

      & > ion-icon:first-child {
        @apply -mb-[0.5rem];
      }
    }

    & ion-icon {
      @apply text-base text-white;
    }
  }

  & select {
    @apply h-7 w-full appearance-none rounded-md border-0 px-3 pb-0.5 pr-9 text-sm font-medium focus:outline-none;

    &::placeholder {
      @apply text-white/40;
    }
  }
}
</style>
