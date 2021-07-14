<template>
  <nav>
    <span v-html="text"></span>
    <button type="button">Menu</button>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  text: String
})
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: var(--color-secondary);
  mix-blend-mode: difference;
}
</style>
