<template>
  <section>
    <h2 v-html="text"></h2>
    <img alt="Vue logo" src="../assets/logo.png" />
  </section>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
});
</script>

<style scoped>
img {
  width: 25vw;
  margin-bottom: -6.25vw;
  z-index: 1;
  position: relative;
  margin-left: var(--content-spacing-x--large);
}
</style>
