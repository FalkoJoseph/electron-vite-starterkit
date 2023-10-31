<template>
  <viewport
    :sidebar-left-top-padding="true"
    :sidebar-left-side-padding="true"
    :sidebar-right-top-padding="true"
    :sidebar-right-side-padding="true"
  />
</template>

<script>
import { markRaw, defineAsyncComponent } from "vue";

import { Viewport } from "@/components/modules";

export default {
  components: {
    Viewport,
  },
  mounted() {
    this.$store.sidebar.setLeftContent({
      list: [
        {
          id: "favorieten",
          component: markRaw(
            defineAsyncComponent(() =>
              import("./globals/sidebar/Favorieten.vue")
            )
          ),
        },
        {
          id: "podcasts",
          component: markRaw(
            defineAsyncComponent(() => import("./globals/sidebar/Podcasts.vue"))
          ),
        },
      ],
    });

    this.$store.sidebar.setRightContent({
      list: [
        {
          id: "albums",
          component: markRaw(
            defineAsyncComponent(() => import("./globals/sidebar/Albums.vue"))
          ),
        },
      ],
    });
  },
};
</script>
