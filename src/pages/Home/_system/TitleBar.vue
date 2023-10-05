<template>
  <TitleBarItem
    class="flex w-1/3 items-center justify-start space-x-2"
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
  </TitleBarItem>

  <TitleBarItem class="w-1/3">
    <p class="font-bold">Home</p>
    <p class="text-xs text-white/50">Components</p>
  </TitleBarItem>

  <TitleBarItem class="flex w-1/3 items-center justify-end space-x-2">
    <button class="btn btn-border hidden lg:block">Preview</button>
    <button class="btn btn-secondary">Publish</button>
    <button class="btn btn-transparent btn-icon active:text-yellow-500">
      <ion-icon :icon="heartOutline"></ion-icon>
    </button>
  </TitleBarItem>
</template>

<script>
import { chevronBackOutline, menuOutline, heartOutline } from "ionicons/icons";
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
      heartOutline,
    };
  },
};
</script>
