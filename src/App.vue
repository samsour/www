<template>
  <Navigation text="samsour." />
  <Stage text="Frontend<br />Web Development" />
  <Introduction
    text="I create digital<br />products with a<br />creative mind<br/>and a focus on<br/>web-based<br />applications."
  />
  <Social />
  <Footer
    imprint="imprint"
    close="close"
    note="made with 🌱 / hosted on 100% green electricity"
    address="Sam Sauer<br />Nahest. 22<br />63110 Rodgau"
    mail="hi@samsour.de"
    phone="+491605712590"
  />
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import Stage from "./components/Stage.vue";
import Introduction from "./components/Introduction.vue";
import Social from "./components/Social.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
@font-face {
  font-family: "Strawford", sans-serif;
  src: url("./assets/fonts/strawford-thin-webfont.woff2") format("woff2"),
    url("./assets/fonts/strawford-thin-webfont.woff") format("woff"),
    url("./assets/fonts/strawford-thin-webfont.tff") format("truetype");
  font-weight: 100;
  font-display: swap;
}

@font-face {
  font-family: "Strawford", sans-serif;
  src: url("./assets/fonts/strawford-extralight-webfont.woff2") format("woff2"),
    url("./assets/fonts/strawford-extralight-webfont.woff") format("woff"),
    url("./assets/fonts/strawford-extralight-webfont.tff") format("truetype");
  font-weight: 200;
  font-display: swap;
}

@font-face {
  font-family: "Strawford", sans-serif;
  src: url("./assets/fonts/strawford-light-webfont.woff2") format("woff2"),
    url("./assets/fonts/strawford-light-webfont.woff") format("woff"),
    url("./assets/fonts/strawford-light-webfont.tff") format("truetype");
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: "Strawford", sans-serif;
  src: url("./assets/fonts/strawford-regular-webfont.woff2") format("woff2"),
    url("./assets/fonts/strawford-regular-webfont.woff") format("woff"),
    url("./assets/fonts/strawford-regular-webfont.tff") format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Strawford", sans-serif;
  src: url("./assets/fonts/strawford-medium-webfont.woff2") format("woff2"),
    url("./assets/fonts/strawford-medium-webfont.woff") format("woff"),
    url("./assets/fonts/strawford-medium-webfont.tff") format("truetype");
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Strawford", sans-serif;
  src: url("./assets/fonts/strawford-bold-webfont.woff2") format("woff2"),
    url("./assets/fonts/strawford-bold-webfont.woff") format("woff"),
    url("./assets/fonts/strawford-bold-webfont.tff") format("truetype");
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: "Strawford", sans-serif;
  src: url("./assets/fonts/strawford-black-webfont.woff2") format("woff2"),
    url("./assets/fonts/strawford-black-webfont.woff") format("woff"),
    url("./assets/fonts/strawford-black-webfont.tff") format("truetype");
  font-weight: 900;
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: transparent;
  border: 0;
}

:root {
  --color-white: #fff;
  --color-black: #000;
  --color-primary: var(--color-black);
  --color-secondary: var(--color-white);
  --h1-size: 12vw;
  --h2-size: calc(var(--h1-size) / 1.2);
  --content-spacing-x: 30px;
  --content-spacing-y: 5vw;
  --content-spacing-x--large: calc(var(--content-spacing-x) * 2);
  --content-spacing-y--large: calc(var(--content-spacing-y) * 3);
  --icon-size: 40px;
  --icon-spacing: 30px;
  --logo-width: 184px;
}

@media screen and (min-width: 768px) {
  :root {
    --h1-size: 10vw;
    --content-spacing-x: 8vw;
    --content-spacing-x--large: var(--logo-width);
  }
}

@media screen and (min-width: 1200px) {
  :root {
    --h1-size: 7vw;
    --content-spacing-x: var(--logo-width);
    --content-spacing-x--large: 25vw;
  }
}

main {
  font-family: "Strawford", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-primary);
  background: var(--color-secondary);
}
h1,
h2,
h3,
h4 {
  text-align: left;
  font-weight: normal;
  letter-spacing: -0.03em;
}

h1 {
  padding: var(--content-spacing-y) var(--content-spacing-x);
  font-size: var(--h1-size);
}

h2 {
  padding: var(--content-spacing-y--large) var(--content-spacing-x--large);
  font-size: var(--h2-size);
}
</style>
