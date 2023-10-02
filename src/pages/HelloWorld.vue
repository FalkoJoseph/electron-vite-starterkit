<template>
  <!-- Titlebar -->
  <title-bar title="Hello world" :has-border="false" :has-background="true">
    <template #left>
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
    </template>
  </title-bar>

  <!-- Window Frame -->
  <WindowFrame>
    <template #main>
      <div class="p-5">
        <p>Hello world</p>
        <button class="btn btn-default" @click="$store.topDialog.show()">
          Dialog
        </button>
      </div>
    </template>
  </WindowFrame>
</template>

<script>
import { chevronBackOutline, menuOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";

import TitleBar from "../components/modules/TitleBar.vue";
import WindowFrame from "../components/modules/WindowFrame.vue";

export default {
  components: {
    TitleBar,
    WindowFrame,
  },
  data() {
    return {
      chevronBackOutline,
      menuOutline,
    };
  },
  methods: {},
  mounted() {},
};
</script>
