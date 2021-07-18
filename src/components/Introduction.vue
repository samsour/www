<template>
  <section>
    <h2 v-html="text"></h2>
    <img alt="Vue logo" :src="imageUrl" />
  </section>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
  imageUrl: String,
});
</script>

<style scoped>
img {
  width: var(--image-width);
  margin-bottom: -6.25vw;
  margin-left: var(--content-spacing-x--large);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25);
}
</style>
