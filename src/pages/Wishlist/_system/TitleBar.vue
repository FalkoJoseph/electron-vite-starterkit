<template>
  <TitleBarItem
    class="flex items-center justify-start space-x-2"
    :align-left="true"
    :actions="true"
  >
    <button
      class="btn btn-transparent btn-icon"
      @click="$store.sidebar.setActive('left')"
    >
      <ion-icon
        :icon="chevronBackOutline"
        v-if="$store.sidebar.activeLeft"
      ></ion-icon>
      <ion-icon
        :icon="menuOutline"
        v-if="!$store.sidebar.activeLeft"
      ></ion-icon>
    </button>

    <p class="font-bold">Hello World</p>
  </TitleBarItem>
</template>

<script>
import { chevronBackOutline, menuOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";

import { TitleBarItem } from "@/components/modules";

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
