<template>
  <div class="relative">
    <!-- Sidebar -->
    <sidebar :top-padding="true" :side-padding="true">
      <template #content>
        <p class="text-xxs mb-1 ml-1.5 font-bold opacity-30">Favorieten</p>
        <ul class="text-tiny">
          <li>
            <RouterLink draggable="false" :to="{ name: 'home' }">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink draggable="false" :to="{ name: 'wishlist' }">
              Wishlist
            </RouterLink>
          </li>
          <li>
            <RouterLink draggable="false" :to="{ name: 'media' }">
              Media
            </RouterLink>
          </li>
        </ul>
        <div class="h-[500px]"></div>
      </template>
    </sidebar>

    <!-- Main -->
    <main-frame>
      <router-view />
    </main-frame>
  </div>
</template>

<script>
import MainFrame from "./components/modules/MainFrame.vue";
import Sidebar from "./components/modules/Sidebar.vue";

export default {
  components: {
    MainFrame,
    Sidebar,
  },
};
</script>

<style>
ul {
  @apply space-y-0.5;
}

li a {
  @apply block truncate rounded-md px-2 py-1 font-medium;

  &.router-link-active {
    @apply bg-white/10;
  }
}
</style>
