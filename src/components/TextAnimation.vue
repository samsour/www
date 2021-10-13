<template>
  <slot />
</template>

<script>
import { TextReveal } from "../assets/js/textReveal";

export default {
  mounted() {
    this.in();
  },
  unmounted() {},
};
</script>

<style></style>
