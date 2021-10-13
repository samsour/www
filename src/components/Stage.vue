<template>
  <section>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 class="hehe">
        <div class="hehe__inner">Frontend</div>
        <div class="hehe__inner">
          <strong>Web Development</strong>
        </div>
      </h1>
    </transition>
  </section>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { TextReveal } from "../assets/js/textReveal";

defineProps({
  text: String,
});

const root = ref(null);

const beforeEnter = (el) => {};

const enter = (el) => {};

onMounted(() => {
  console.log();
});
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

div {
  opacity: 0;
  transform: translateY(-20px);
  animation: var(--animation--fade-in-and-move),
    var(--animation--background-gradient);
  animation-delay: 500ms;
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
