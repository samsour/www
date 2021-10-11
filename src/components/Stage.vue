<template>
  <section>
    <h1>
      <span>Frontend</span><br /><span>Web Development</span>
    </h1>
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

span {
  opacity: 0;
  transform: translateY(-20px);
  animation: var(--animation--fade-in-and-move), var(--animation--background-gradient);
  animation-delay: 500ms;
  background: linear-gradient(to left, var(--color-dark-purple), var(--color-secondary));
  background-size: 300%;
  background-clip: text;
  color: #000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  font-weight: 600;
}
span + span {
  animation-delay: 1500ms;
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
