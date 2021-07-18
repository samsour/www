<template>
  <nav>
    <a href="//github.com/samsour" target="_blank">
      <GitHub />
    </a>
    <a href="//www.linkedin.com/in/samsauer/" target="_blank">
      <LinkedIn />
    </a>
    <a href="//www.xing.com/profile/Sam_Sauer/cv" target="_blank">
      <Xing />
    </a>
    <a href="//twitter.com/qwerfeldein" target="_blank">
      <Twitter />
    </a>
    <a href="mailto:hi@samsour.de?subject=What%27s%20up%3F" target="_blank">
      <Mail />
    </a>
  </nav>
</template>

<script setup>
import GitHub from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Xing from "../assets/icons/xing.svg";
import Twitter from "../assets/icons/twitter.svg";
import Mail from "../assets/icons/mail.svg";
</script>

<style scoped>
nav {
  background: var(--color-primary);
  padding: var(--content-spacing-y--large) var(--content-spacing-x--large)
    var(--content-spacing-y);
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(var(--icon-size) + var(--icon-spacing) * 2), 1fr)
  );
  margin-left: calc(-1 * var(--icon-spacing));
}

a {
  display: flex;
  padding: var(--icon-spacing);
  transition: transform 150ms ease-out;
  will-change: transform;
  justify-content: center;
  /* transform: translateX(calc(-1 * var(--icon-spacing))) scale(1); */
}

a:hover {
  /* transform: translateX(calc(-1 * var(--icon-spacing))) scale(1.3); */
  transform: scale(1.3);
}

svg {
  width: var(--icon-size);
  height: var(--icon-size);
}
</style>
