<template>
  <!-- <Renderer /> -->
  <Cursor :targets="['a', 'button']" :hoverSize="3" />
  <Navigation />
  <!-- <Stage /> -->
  <Introduction
    class="introduction"
    imageUrl="https://gravatar.com/avatar/ffbe5501ae6465788b4df385fcd944c7?s=500"
  />
  <Social />
  <Footer
    imprint="imprint"
    close="close"
    note="made with 🌱 / hosted on 100% green electricity"
    address="Sam Sauer<br />63110 Rodgau"
    mail="hi@samsour.de"
  />
</template>

<script setup>
import Cursor from "./components/Cursor.vue";
import Navigation from "./components/Navigation.vue";
// import Stage from "./components/Stage.vue";
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
  cursor: none;
}

*::selection {
  color: currentColor;
  background-color: var(--color-highlight);
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
  --color-lime: rgb(89, 201, 145);
  --color-red: #f4003c;
  --color-purple: rgb(144, 68, 216);
  --color-dark-purple: rgb(64, 29, 97);
  --color-primary: var(--color-black);
  --color-secondary: var(--color-white);
  --color-highlight: var(--color-red);
  --h1-size: 10vw;
  --h2-size: calc(var(--h1-size) / 1.2);
  --content-spacing-x: 30px;
  --content-spacing-y: 8vw;
  --content-spacing-x--large: calc(var(--content-spacing-x) * 2);
  --content-spacing-y--large: calc(var(--content-spacing-y) * 2.5);
  --icon-size: 40px;
  --icon-size--social: 28px;
  --icon-spacing: 30px;
  --logo-width: 184px;
  --image-width: 50vw;
  --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif;
  --ease: cubic-bezier(0.23, 1, 0.32, 1);
  --animation--fade-in: fadeIn 500ms ease-in-out forwards;
  --animation--move: move 500ms ease-in-out forwards;
  --animation--fade-in-and-move: fadeInAndMove 500ms ease-in-out forwards;
  --animation--background-gradient: backgroundGradient 600ms ease-in-out
    forwards;
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
}

h1,
h2 {
  padding: var(--content-spacing-y--large) var(--content-spacing-x--large);
  font-size: var(--h2-size);
}

h3 {
  padding: var(--content-spacing-y--large) var(--content-spacing-x--large);
  font-size: var(--h2-size);
}

svg {
  pointer-events: none;
}

.hehe {
  overflow: hidden;
}

.hehe__inner {
  opacity: 0;
  display: inline-block;
  transform-origin: 0% 50%;
  will-change: transform;
}

.introduction {
  padding-top: 2.75rem;

  @media screen and (min-width: 768px) {
    padding-top: 0rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes move {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes fadeInAndMove {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes backgroundGradient {
  from {
    background-position-x: 100%;
  }
  to {
    background-position-x: 10%;
  }
}
</style>
