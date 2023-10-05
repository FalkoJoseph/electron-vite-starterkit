<template>
  <WindowFrame>
    <div class="h-full">
      <img
        class="h-full w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1518882496191-511e15d01a58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt="Image"
      />
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
      hasBackground: true,
      component: markRaw(
        defineAsyncComponent(() => import("./_system/TitleBar.vue"))
      ),
    });
  },
};
</script>
