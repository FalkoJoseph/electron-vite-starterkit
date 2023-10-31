<template>
  <!-- Note: please do not change this structure, these components are required -->
  <div class="relative">
    <!-- Left sidebar -->
    <sidebar
      position="left"
      :top-padding="$store.sidebar.padding.left.top"
      :side-padding="$store.sidebar.padding.left.side"
    />

    <!-- Main -->
    <main-frame>
      <router-view />
    </main-frame>

    <!-- Right sidebar -->
    <sidebar
      position="right"
      :top-padding="$store.sidebar.padding.right.top"
      :side-padding="$store.sidebar.padding.right.side"
    />
  </div>
</template>

<script>
import { useSidebarStore } from "@/stores/sidebar";

import MainFrame from "./MainFrame.vue";
import Sidebar from "./Sidebar.vue";

export default {
  props: [
    "sidebarLeftTopPadding",
    "sidebarLeftSidePadding",
    "sidebarRightTopPadding",
    "sidebarRightSidePadding",
  ],
  components: {
    MainFrame,
    Sidebar,
  },
  created() {
    this.$store.sidebar = useSidebarStore();
  },
};
</script>
