<template>
  <div
    :class="[
      $store.sidebar.activeLeft && alignLeft ? '' : 'pl-[4.5rem]',
      actions ? 'title-actions' : '',
      alignLeft ? 'transition-all duration-150 ease-in-out' : '',
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
