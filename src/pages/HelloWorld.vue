<template>
  <!-- Titlebar -->
  <title-bar title="Hello world" :has-border="false" :has-background="true" />

  <!-- Window Frame -->
  <WindowFrame>
    <template #main>
      <div class="p-5">
        <p>Hello world</p>
        <button class="btn btn-default" @click="$store.topDialog.show()">
          Dialog
        </button>
      </div>
    </template>
  </WindowFrame>
</template>

<script>
import TitleBar from "../components/modules/TitleBar.vue";
import WindowFrame from "../components/modules/WindowFrame.vue";

export default {
  components: {
    TitleBar,
    WindowFrame,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
