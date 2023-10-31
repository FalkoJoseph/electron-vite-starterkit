<template>
  <div class="p-5">
    <p class="text-base font-bold capitalize">Create new project</p>
  </div>
  <div class="px-5 pb-5">
    <div class="flex items-center space-x-5">
      <div class="w-1/3 text-right">
        <p>Project Name:</p>
      </div>
      <div class="w-2/3">
        <input-control class="w-full" placeholder="New Project" />
      </div>
    </div>
  </div>
  <div class="flex justify-end p-5 space-x-3 border-t border-white/5">
    <button class="btn btn-default" @click="$store.topDialog.hide()">
      Cancel
    </button>
    <button class="btn btn-primary" @click="$store.topDialog.hide()">OK</button>
  </div>
</template>

<script>
import { InputControl } from "@/components/modules";

export default {
  components: {
    InputControl,
  },
};
</script>
