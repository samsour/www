<template>
  <section>
    <h1>{{ text }}</h1>
    <div>Scroll down marker</div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  text: String
})
</script>

<style scoped></style>
