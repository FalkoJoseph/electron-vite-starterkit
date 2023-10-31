<template>
  <div class="sidebar-list">
    <div class="flex justify-between group">
      <p class="text-xxs mb-1 ml-1.5 font-bold opacity-30">
        {{ title }}
      </p>
      <div
        class="hidden opacity-30 active:opacity-60 group-hover:block"
        @click="toggleList"
      >
        <ion-icon :icon="chevronDownOutline" v-if="listActive"></ion-icon>
        <ion-icon :icon="chevronForwardOutline" v-else></ion-icon>
      </div>
    </div>

    <Transition name="sidebar-list">
      <div class="overflow-hidden text-tiny" ref="listItem" v-if="listActive">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script>
import { chevronDownOutline, chevronForwardOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";

export default {
  props: ["title", "id", "position"],
  components: {},
  computed: {
    listActive() {
      let item = null;
      if (this.position === "left") {
        item = this.$store.sidebar.list.find((item) => item.id === this.id);
      } else {
        item = this.$store.sidebar.listRight.find(
          (item) => item.id === this.id
        );
      }
      return item.active;
    },
  },
  data() {
    return {
      height: 0,
      chevronDownOutline,
      chevronForwardOutline,
    };
  },
  methods: {
    toggleList() {
      this.$store.sidebar.toggleList(this.id, this.position);
    },
  },
  mounted() {
    this.height = `${this.$refs.listItem.clientHeight}px`;
  },
};
</script>

<style>
.sidebar-list ul {
  @apply space-y-0.5;
}

.sidebar-list li a {
  @apply block truncate rounded-md px-2 py-1 font-medium;

  &.router-link-active {
    @apply bg-black/10 dark:bg-white/10;
  }
}

.sidebar-list-enter-active,
.sidebar-list-leave-active {
  @apply max-h-[v-bind(height)] transition-all duration-200 ease-linear;
}

.sidebar-list-enter-from,
.sidebar-list-leave-to {
  @apply max-h-0;
}

.sidebar-list-enter-active > *,
.sidebar-list-leave-active > * {
  @apply transition-all duration-200 ease-linear;
}

.sidebar-list-enter-from > *,
.sidebar-list-leave-to > * {
  @apply -translate-y-full;
}
</style>
