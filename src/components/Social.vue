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
  padding: calc(var(--content-spacing-y--large) * 2) var(--content-spacing-x)
    var(--content-spacing-y--large);
  color: var(--color-secondary);
  display: flex;
}

a {
  display: block;
  padding: var(--icon-spacing);
  margin-left: 20px;
  transition: transform 150ms ease-out;
}

a:hover {
  transform: scale(1.3);
}

a:first-of-type {
  margin-left: calc(-1 * var(--icon-spacing));
}

svg {
  width: var(--icon-size);
  height: var(--icon-size);
}
</style>
