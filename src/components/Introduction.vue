<template>
  <section>
    <transition-group tag="h2" appear @enter="enter">
      <div v-for="(line, index) in lines" :key="index" class="hehe">
        <div class="hehe__inner">{{ line }}</div>
      </div>
    </transition-group>
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
import { TextReveal } from "../assets/js/textReveal";

const lines = [
  "I create digital",
  "products with a",
  "creative mind",
  "and a focus on",
  "web-based",
  "applications.",
];

defineProps({
  text: String,
  imageUrl: String,
});

const enter = (el) => {
  const animation = new TextReveal(el);
  animation.in();
};
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
