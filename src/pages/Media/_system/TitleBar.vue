<template>
  <TitleBarItem
    class="flex items-center justify-start space-x-2"
    :align-left="true"
    :actions="true"
  >
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

    <p class="font-bold">Media</p>
  </TitleBarItem>
</template>

<script>
import { chevronBackOutline, menuOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";

import TitleBarItem from "@/components/modules/TitleBarItem.vue";

export default {
  components: {
    TitleBarItem,
  },
  data() {
    return {
      chevronBackOutline,
      menuOutline,
    };
  },
};
</script>
