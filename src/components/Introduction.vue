<template>
  <section>
    <h2>
      <div>I create digital</div>
      <div>products with a</div>
      <div>creative mind</div>
      <div>and a focus on</div>
      <div>web-based applications.</div>
    </h2>
    <img
      alt="Sam"
      src="./../assets/images/profile.jpg"
      srcset="
        ./../assets/images/profile.jpg   1x,
        ./../assets/images/profile2x.jpg 2x
      "
    />
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
h2 {
  padding-bottom: calc(var(--content-spacing-y--large) / 2);
}

img {
  width: var(--image-width);
  margin-bottom: calc(var(--content-spacing-y--large) / -2);
  margin-left: var(--content-spacing-x--large);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25);
}
</style>
