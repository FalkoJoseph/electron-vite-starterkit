<template>
  <WindowFrame>
    <div class="p-5">
      <p>Creativity is just connecting things - Steve Jobs</p>
    </div>
  </WindowFrame>
</template>

<script>
import { markRaw, defineAsyncComponent } from "vue";

import WindowFrame from "@/components/modules/WindowFrame.vue";

export default {
  components: {
    WindowFrame,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.titlebar.set({
      hasBackground: false,
      left: markRaw(
        defineAsyncComponent(() => import("./_system/TitleBar/Left.vue"))
      ),
    });
  },
};
</script>
