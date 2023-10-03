<template>
  <button class="btn btn-border hidden lg:block">Preview</button>
  <button class="btn btn-secondary">Publish</button>
  <button class="btn btn-transparent btn-icon active:text-yellow-500">
    <ion-icon :icon="heartOutline"></ion-icon>
  </button>
</template>

<script>
import { heartOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";

export default {
  data() {
    return {
      heartOutline,
    };
  },
};
</script>
