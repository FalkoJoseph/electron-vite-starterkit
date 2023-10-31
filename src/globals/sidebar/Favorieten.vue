<template>
  <sidebar-list title="Favorieten" id="favorieten" position="left">
    <ul>
      <li>
        <RouterLink draggable="false" :to="{ name: 'home' }">
          <SidebarItem :icon="homeOutline" title="Home" />
        </RouterLink>
      </li>
      <li>
        <RouterLink draggable="false" :to="{ name: 'wishlist' }">
          <SidebarItem :icon="starOutline" title="Wishlist" />
        </RouterLink>
      </li>
      <li>
        <RouterLink draggable="false" :to="{ name: 'media' }">
          <SidebarItem :icon="imageOutline" title="Media" />
        </RouterLink>
      </li>
    </ul>
  </sidebar-list>
</template>

<script>
import { homeOutline, starOutline, imageOutline } from "ionicons/icons";

import { SidebarList, SidebarItem } from "@/components/modules";

export default {
  components: {
    SidebarList,
    SidebarItem,
  },
  data() {
    return {
      homeOutline,
      starOutline,
      imageOutline,
    };
  },
  mounted() {},
};
</script>
