<template>
  <div class="relative">
    <!-- Sidebar -->
    <sidebar>
      <template #content>
        <div class="px-3 pb-10 pt-12">
          <ul>
            <li>
              <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'hello-world' }">Hello world</RouterLink>
            </li>
          </ul>
        </div>
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
  data() {
    return {};
  },
  methods: {},
};
</script>
