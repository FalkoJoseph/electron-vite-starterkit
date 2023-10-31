<template>
  <div class="relative">
    <div
      v-if="icon"
      class="absolute left-0 top-0 mt-0.5 text-base leading-none text-primary-500"
    >
      <ion-icon :icon="icon"></ion-icon>
    </div>
    <p :class="[icon ? 'ml-6' : '']">{{ title }}</p>
  </div>
</template>

<script>
import { IonIcon } from "@ionic/vue";

export default {
  props: ["icon", "title"],
  mounted() {},
};
</script>
