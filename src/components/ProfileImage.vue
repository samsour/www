<template>
  <img
    alt="Sam"
    srcset="../assets/images/avatar@2.webp 2x, ../assets/images/avatar.webp 1x"
    sizes="(max-width: 1024px) 1024px,
           (max-width: 768px) 768px,
           (max-width: 500px) 500px"
    src="../assets/images/avatar.webp"
  />
</template>

<style scoped>
img {
  width: var(--image-width);
  margin-bottom: calc(var(--content-spacing-y--large) / -2);
  margin-left: var(--content-spacing-x--large);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25);
}
</style>
