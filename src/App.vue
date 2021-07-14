<template>
  <Navigation text="samsour." />
  <Stage text="Frontend web development" />
  <Introduction text="I create digital products with a creative mind and the focus on web based applications." />
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
:root {
  --color-white: #fff;
  --color-black: #000;
  --color-primary: var(--color-black);
  --color-secondary: var(--color-white);
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-primary);
  background: var(--color-secondary);
}
</style>
