<template>
  <section>
    <h2>{{ text }}</h2>
    <img alt="Vue logo" src="../assets/logo.png" />
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  text: String
})
</script>

<style scoped></style>
