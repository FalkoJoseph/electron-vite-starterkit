<template>
  <WindowFrame>
    <div class="p-5">
      <div class="space-y-5">
        <div>
          <p><strong>Features</strong></p>
          <ul class="ml-3 list-disc">
            <li>Podcast app style player controls</li>
            <li>Keyboard shortcut SDK</li>
            <li>History SDK (previous / backwards)</li>
            <li>Form components / styles</li>
            <li>Graphs & Charts</li>
            <li>Storage API</li>
            <li>✅ Automatic darkmode</li>
          </ul>
        </div>

        <div class="hidden">
          <p><strong>Apps</strong></p>
          <ul class="ml-3 list-disc">
            <li>GPT-3 todo app</li>
            <li>Movie release watcher (notifications, calendar)</li>
            <li>Movie trailers</li>
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
