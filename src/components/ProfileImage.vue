<template>
  <img
    alt="Sam"
    srcset="../assets/images/avatar@2.webp 2x, ../assets/images/avatar.webp 1x"
    sizes="(max-width: 1024px) 1024px,
           (max-width: 768px) 768px,
           (max-width: 500px) 500px"
    src="../assets/images/avatar.webp"
    @load="onImageLoad"
    :class="{ revealed: isLoaded }"
  />
</template>

<script setup>
import { ref } from "vue";

const isLoaded = ref(false);

const onImageLoad = () => {
  requestAnimationFrame(() => {
    isLoaded.value = true;
  });
};
</script>

<style scoped>
img {
  width: var(--image-width);
  margin-bottom: calc(var(--content-spacing-y--large) / -2);
  margin-left: var(--content-spacing-x--large);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25);
  mask-image: linear-gradient(to bottom, transparent 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 100%
  );
  mask-size: 100% 0%;
  -webkit-mask-size: 100% 0%;
  mask-position: top;
  -webkit-mask-position: top;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

img.revealed {
  mask-image: linear-gradient(to bottom, black 0%, black 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 0%, black 100%);
  mask-size: 100% 100%;
  -webkit-mask-size: 100% 100%;
}
</style>
