<template>
  <div
    class="window relative z-0 flex-1 overflow-hidden overflow-y-auto bg-gray-800/80"
  >
    <!-- Top Dialog -->
    <TopDialog>
      <template #title>Create new project</template>

      <template #body>
        <div class="flex items-center space-x-5">
          <div class="w-1/3 text-right">
            <p>Project Name:</p>
          </div>
          <div class="w-2/3">
            <input-control class="w-full" placeholder="New Project" />
          </div>
        </div>
      </template>

      <template #footer>
        <button class="btn btn-default" @click="$store.topDialog.hide()">
          Cancel
        </button>
        <button class="btn btn-primary" @click="$store.topDialog.hide()">
          OK
        </button>
      </template>
    </TopDialog>

    <slot name="main" />
  </div>
</template>

<script>
import TopDialog from "./TopDialog.vue";
import InputControl from "../atoms/InputControl.vue";

export default {
  components: {
    TopDialog,
    InputControl,
  },
};
</script>
