<template>
  <nav>
    <Logo />
    <Burger />
  </nav>
</template>

<script setup>
import Logo from "./Logo.vue";
import Burger from "./Burger.vue";

defineProps({
  text: String,
});
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  color: var(--color-secondary);
  mix-blend-mode: difference;
  opacity: 0;
  will-change: opacity;
  animation: fadeIn 1s ease-in-out 1.5s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
