<template>
  <div class="card group" :class="[active ? 'is-active' : '']">
    <div class="card-frame flex items-center justify-center">
      <slot></slot>
    </div>

    <div
      class="flex justify-center rounded-full"
      :class="[active ? 'bg-brand-500' : '']"
    >
      <p class="card-text">
        {{ label }}
      </p>
    </div>

    <p class="mt-1 text-center text-sm text-white/50" v-if="subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["active", "label", "subtitle"],
  data() {
    return {
      value: "",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style>
.card.is-active {
  & .card-frame {
    @apply bg-primary-500/10;
  }
}

.card:active {
  & .card-frame {
    @apply bg-primary-500/20;
  }
}

.card:active,
.card.is-active {
  & .card-text {
    @apply bg-primary-500;
  }

  & .card-frame {
    box-shadow: 0 0 0 2px theme("colors.primary.500");
  }
}

.card-frame {
  @apply mb-4 rounded-md;
}

.card-text {
  @apply rounded-full px-3 text-sm font-semibold text-white/80;
}
</style>
