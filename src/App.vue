<template>
  <Navigation text="samsour." />
  <Stage text="Frontend<br />web development" />
  <Introduction text="I create digital<br />products with a<br />creative mind<br/>and a focus on<br/>web-based<br />applications." />
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
import Navigation from './components/Navigation.vue'
import Stage from './components/Stage.vue'
import Introduction from './components/Introduction.vue'
import Social from './components/Social.vue'
import Footer from './components/Footer.vue'

</script>

<style>
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
  --h1-size: 9vw;
  --h2-size: calc(var(--h1-size) / 1.5);
  --content-spacing-x: 8vw;
  --content-spacing-y: 4vw;
  --content-spacing-x--large: 25vw;
  --content-spacing-y--large: 15vw;
}

main {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-primary);
  background: var(--color-secondary);
}
h1, h2, h3, h4 {
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
