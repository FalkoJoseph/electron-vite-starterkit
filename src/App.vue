<template>
  <div
    class="p-2 text-sm text-center text-white bg-gray-900 shadow-sm titlebar"
  >
    Title
  </div>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div>
        <a href="https://vitejs.dev/" target="_blank">
          <img src="./assets/vite.svg" class="logo" alt="Vite logo" />
        </a>
      </div>

      <p class="text-4xl">Vite Starterkit</p>

      <p>{{ count }}</p>

      <button @click="increment">Adding</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      count: 1,
    };
  },
  computed: {},
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<style>
.titlebar {
  -webkit-app-region: drag;
}
</style>
