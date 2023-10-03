<template>
  <button
    class="btn btn-transparent btn-icon"
    @click="$store.sidebar.setActive()"
  >
    <ion-icon
      :icon="chevronBackOutline"
      v-if="$store.sidebar.active"
    ></ion-icon>
    <ion-icon :icon="menuOutline" v-if="!$store.sidebar.active"></ion-icon>
  </button>

  <p class="font-bold">Hello World</p>
</template>

<script>
import { chevronBackOutline, menuOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";

export default {
  data() {
    return {
      chevronBackOutline,
      menuOutline,
    };
  },
};
</script>
