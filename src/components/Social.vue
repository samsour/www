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
  padding: var(--content-spacing-y--large) var(--content-spacing-x);
  color: var(--color-secondary);
}
</style>
