<template>
  <section>
    <h1 v-html="text"></h1>
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
  color: var(--color-secondary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

section::after {
  content: "";
  width: 1px;
  height: 0px;
  margin-top: 160px;
  display: block;
  will-change: height;
  background: var(--color-secondary);
  animation: drawHeight 3s ease 2s infinite;
  left: 50%;
  position: absolute;
  bottom: 5vh;
}

@keyframes drawHeight {
  10% {
    height: 0px;
    margin-top: 160px;
  }
  50% {
    height: 160px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  90% {
    height: 0px;
    margin-top: 0px;
    margin-bottom: 160px;
  }
}
</style>
