<template>
  <img
    ref="imageRef"
    alt="Sam"
    srcset="../assets/images/avatar@2.webp 2x, ../assets/images/avatar.webp 1x"
    sizes="(max-width: 1024px) 1024px,
           (max-width: 768px) 768px,
           (max-width: 500px) 500px"
    src="../assets/images/avatar.webp"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageRef = ref(null);

onMounted(() => {
  const image = imageRef.value;

  gsap.set(image, {
    maskImage: "linear-gradient(to bottom, black 0%, black 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 100%)",
    maskSize: "100% 0%",
    WebkitMaskSize: "0% 0%",
    maskPosition: "top",
    WebkitMaskPosition: "top",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
  });

  gsap.to(image, {
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    duration: 1.5,
    ease: "expo.out",
    scrollTrigger: {
      trigger: image,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<style scoped>
img {
  width: var(--image-width);
  margin-bottom: calc(var(--content-spacing-y--large) / -2);
  margin-left: var(--content-spacing-x--large);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25);
}
</style>
