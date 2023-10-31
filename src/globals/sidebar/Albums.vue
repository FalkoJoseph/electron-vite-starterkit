<template>
  <sidebar-list title="Albums" id="albums" position="right">
    <ul>
      <li>
        <RouterLink draggable="false" :to="{ name: 'media' }">
          <SidebarItem title="1989" />
        </RouterLink>
      </li>
      <li>
        <RouterLink draggable="false" :to="{ name: 'media' }">
          <SidebarItem title="Justified" />
        </RouterLink>
      </li>
      <li>
        <RouterLink draggable="false" :to="{ name: 'media' }">
          <SidebarItem title="RED" />
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
