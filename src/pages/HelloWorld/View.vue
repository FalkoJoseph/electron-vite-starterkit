<template>
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
import { markRaw, defineAsyncComponent } from "vue";

import WindowFrame from "../../components/modules/WindowFrame.vue";

export default {
  components: {
    WindowFrame,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.titlebar.setTitlebar({
      hasBackground: false,
      left: markRaw(defineAsyncComponent(() => import("./Title/Center.vue"))),
    });
  },
};
</script>
