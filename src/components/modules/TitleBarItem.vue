<template>
  <div
    class="transition-all duration-150 ease-in-out"
    :class="[
      $store.sidebar.active && alignLeft ? '' : 'pl-[4.5rem]',
      actions ? 'title-actions' : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["actions", "alignLeft"],
};
</script>
