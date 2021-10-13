<template>
  <section>
    <transition-group appear @enter="enter" tag="h1">
      <div key="1" class="hehe">
        <div class="hehe__inner">Frontend</div>
      </div>
      <div key="2" class="hehe">
        <div class="hehe__inner">
          <strong>Web Development</strong>
        </div>
      </div>
    </transition-group>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import { TextReveal } from "../assets/js/textReveal";

defineProps({
  text: String,
});

const enter = (el) => {
  const animation = new TextReveal(el);
  animation.in();
};
</script>

<style scoped>
section {
  background-color: var(--color-primary);
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

h1 div {
  background: linear-gradient(
    to left,
    var(--color-primary),
    var(--color-secondary)
  );
  background-size: 300%;
  background-clip: text;
  color: #000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
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
