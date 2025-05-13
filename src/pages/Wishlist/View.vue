<template>
  <WindowFrame>
    <div class="p-5">
      <div class="space-y-5">
        <div>
          <p><strong>Features</strong></p>
          <ul class="ml-3 list-disc">
            <li>Command pallette (default UI + autocomplete API & SDK)</li>
            <li>Keyboard shortcut SDK (ShortKit)</li>
            <li>History SDK (previous / backwards)</li>
            <li>Graphs & Charts (ChartKit)</li>
            <li>Storage API (StorageKit)</li>
            <li>Native UI video & audio player (MediaKit)</li>
            <li>API to interact with native Node.js functions (NativeKit)</li>
            <li>✅ Automatic darkmode</li>
          </ul>
        </div>

        <div>
          <p><strong>Apps</strong></p>
          <ul class="ml-3 list-disc">
            <li>GPT-3 todo app</li>
            <li>Basic Notion clone with unique features</li>
            <li>Invoice/estimate designer</li>
            <li>Movie release watcher (notifications, calendar)</li>
            <li>Beautiful movie trailers</li>
            <li>Ember App (Realmac)</li>
            <li>Tailwind shade generator</li>
          </ul>
        </div>
      </div>
    </div>
  </WindowFrame>
</template>

<script>
import { markRaw, defineAsyncComponent } from "vue";

import { WindowFrame } from "@/components/modules";

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
      component: markRaw(
        defineAsyncComponent(() => import("./_system/TitleBar.vue"))
      ),
    });

    this.$store.window.set({
      hasBackground: false,
    });

    this.$store.sidebar.hide("right");
  },
};
</script>
