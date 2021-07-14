<template>
  <nav>
    <span>{{ text }}</span>
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
}
</style>
