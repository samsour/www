<template>
  <section>
    <div>Social Icons</div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
});
</script>

<style scoped>
section {
  background: var(--color-primary);
  padding: calc(var(--content-spacing-y--large) * 2) var(--content-spacing-x)
    var(--content-spacing-y--large);
  color: var(--color-secondary);
}
</style>
