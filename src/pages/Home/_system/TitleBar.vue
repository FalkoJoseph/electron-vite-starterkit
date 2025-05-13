<template>
  <TitleBarItem
    class="flex items-center justify-start w-1/3 space-x-2"
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
  </TitleBarItem>

  <TitleBarItem class="w-1/3">
    <p class="font-bold">Home</p>
    <p class="text-xs opacity-70">Components</p>
  </TitleBarItem>

  <TitleBarItem class="w-1/3" :actions="true">
    <div class="items-center justify-end hidden space-x-2 xl:flex">
      <button class="btn btn-border" @click="$store.sidebar.setActive('right')">
        Layers
      </button>
      <button class="btn btn-secondary">Publish</button>
      <button class="btn btn-transparent btn-icon dark:active:text-yellow-500">
        <ion-icon :icon="heartOutline"></ion-icon>
      </button>
    </div>
  </TitleBarItem>
</template>

<script>
import { chevronBackOutline, menuOutline, heartOutline } from "ionicons/icons";
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
      heartOutline,
    };
  },
};
</script>
