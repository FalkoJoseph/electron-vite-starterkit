<template>
  <sidebar-list title="Podcasts" id="podcasts" position="left">
    <ul>
      <li>
        <RouterLink draggable="false" :to="{ name: 'media' }">
          <SidebarItem title="Welcome to the AA" />
        </RouterLink>
      </li>
      <li>
        <RouterLink draggable="false" :to="{ name: 'media' }">
          <SidebarItem title="NoSleep" />
        </RouterLink>
      </li>
    </ul>
  </sidebar-list>
</template>

<script>
import { SidebarList, SidebarItem } from "@/components/modules";

export default {
  components: {
    SidebarList,
    SidebarItem,
  },
  mounted() {},
};
</script>
