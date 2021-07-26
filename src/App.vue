<template>
  <Navigation text="samsour." />
  <Stage text="frontend<br />web development" />
  <Introduction
    text="I create digital products with a creative mind and a focus on web-based applications."
    imageUrl="https://gravatar.com/avatar/ffbe5501ae6465788b4df385fcd944c7?s=500"
  />
  <Social />
  <Footer
    imprint="imprint"
    close="close"
    note="made with 🌱 / hosted on 100% green electricity"
    address="Sam Sauer<br />Nahest. 22<br />63110 Rodgau"
    mail="hi@samsour.de"
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: transparent;
  border: 0;
}

a,
span,
button,
div,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-family: var(--font-family);
  line-height: 1.2;
  color: currentColor;
}

:root {
  --color-white: #fff;
  --color-black: #000;
  --color-primary: var(--color-black);
  --color-secondary: var(--color-white);
  --h1-size: 12vw;
  --h2-size: calc(var(--h1-size) / 1.2);
  --content-spacing-x: 30px;
  --content-spacing-y: 8vw;
  --content-spacing-x--large: calc(var(--content-spacing-x) * 2);
  --content-spacing-y--large: calc(var(--content-spacing-y) * 3);
  --icon-size: 40px;
  --icon-size--social: 28px;
  --icon-spacing: 30px;
  --logo-width: 184px;
  --image-width: 50vw;
  --font-family: Arial, Helvetica, sans-serif;
}

@media screen and (min-width: 768px) {
  :root {
    --h1-size: 10vw;
    --content-spacing-x: 8vw;
    --content-spacing-x--large: var(--logo-width);
    --image-width: 25vw;
    --icon-size--social: var(--icon-size);
  }
}

@media screen and (min-width: 1200px) {
  :root {
    --h1-size: 7vw;
    --content-spacing-x: var(--logo-width);
    --content-spacing-x--large: 25vw;
  }
}

@media screen and (min-width: 1920px) {
  :root {
    --h1-size: 150px;
    --content-spacing-x: 10vw;
  }
}

main {
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
  font-weight: 400;
  letter-spacing: -0.03em;
  mix-blend-mode: luminosity;
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
