<template>
  <!-- Note: please do not change this structure, these components are required -->
  <div class="relative">
    <!-- Left sidebar -->
    <sidebar
      position="left"
      :top-padding="sidebarLeftTopPadding"
      :side-padding="sidebarLeftSidePadding"
    />

    <!-- Main -->
    <main-frame>
      <router-view />
    </main-frame>

    <!-- Right sidebar -->
    <sidebar
      position="right"
      :top-padding="sidebarRightTopPadding"
      :side-padding="sidebarRightSidePadding"
    />
  </div>
</template>

<script>
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
};
</script>
