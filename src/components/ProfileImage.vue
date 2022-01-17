<template>
  <picture>
    <source
      media="(min-width: 1025px)"
      srcset="../assets/images/profile@4x.webp"
      type="image/webp"
    />
    <source
      media="(max-width: 1024px)"
      srcset="../assets/images/profile@4x.webp"
      type="image/webp"
    />
    <source
      media="(max-width: 768px)"
      srcset="../assets/images/profile@3x.webp"
      type="image/webp"
    />
    <source
      media="(max-width: 500px)"
      srcset="../assets/images/profile@2x.webp"
      type="image/webp"
    />
    <source
      media="(max-width: 360px)"
      srcset="../assets/images/profile.webp"
      type="image/webp"
    />

    <source
      media="(min-width: 1025px)"
      srcset="../assets/images/profile@4x.jpg"
      type="image/jpeg"
    />
    <source
      media="(max-width: 1024px)"
      srcset="../assets/images/profile@4x.jpg"
      type="image/jpeg"
    />
    <source
      media="(max-width: 768px)"
      srcset="../assets/images/profile@3x.jpg"
      type="image/jpeg"
    />
    <source
      media="(max-width: 500px)"
      srcset="../assets/images/profile@2x.jpg"
      type="image/jpeg"
    />
    <source
      media="(max-width: 360px)"
      srcset="../assets/images/profile.jpg"
      type="image/jpeg"
    />

    <img
      alt="Sam"
      srcset="
        ../assets/images/profile@4x.jpg 1024w,
        ../assets/images/profile@3x.jpg  768w,
        ../assets/images/profile@2x.jpg  500w
      "
      sizes="(max-width: 1024px) 1024px,
            (max-width: 768px) 768px,
            (max-width: 500px) 500px"
      src="../assets/images/profile@4x.jpg"
    />
  </picture>
</template>

<style scoped>
img {
  width: var(--image-width);
  margin-bottom: calc(var(--content-spacing-y--large) / -2);
  margin-left: var(--content-spacing-x--large);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25);
}
</style>
