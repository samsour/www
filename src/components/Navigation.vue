<template>
  <nav>
    <Logo />
    <Burger />
  </nav>
</template>

<script setup>
import Logo from "./Logo.vue";
import Burger from "./Burger.vue";
import { defineProps } from "vue";

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
  color: var(--color-secondary);
  mix-blend-mode: difference;
}
</style>
