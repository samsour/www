<template>
  <section>
    <transition-group tag="h2" appear @enter="enter">
      <div class="hehe" key="1">
        <div class="hehe__inner">
          I create
          <span
            @mouseover="hovering = 'digitalProducts'"
            @mouseleave="hovering = ''"
            :class="{ highlight: hovering === 'digitalProducts' }"
          >
            digital
          </span>
        </div>
      </div>
      <div class="hehe" key="2">
        <div class="hehe__inner">
          <span
            @mouseover="hovering = 'digitalProducts'"
            @mouseleave="hovering = ''"
            :class="{ highlight: hovering === 'digitalProducts' }"
          >
            products
          </span>
          with a
        </div>
      </div>
      <div class="hehe" key="3">
        <div class="hehe__inner">
          <span
            @mouseover="hovering = 'creativeMind'"
            @mouseleave="hovering = ''"
            :class="{ highlight: hovering === 'creativeMind' }"
          >
            creative mind
          </span>
        </div>
      </div>
      <div class="hehe" key="4">
        <div class="hehe__inner">and a focus on</div>
      </div>
      <div class="hehe" key="5">
        <div class="hehe__inner">
          <span
            @mouseover="hovering = 'webBasedApplications'"
            @mouseleave="hovering = ''"
            :class="{ highlight: hovering === 'webBasedApplications' }"
          >
            web-based applications.
          </span>
        </div>
      </div>
    </transition-group>
    <img
      alt="Sam"
      src="./../assets/images/profile.jpg"
      srcset="
        ./../assets/images/profile.jpg   1x,
        ./../assets/images/profile2x.jpg 2x
      "
    />
  </section>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { TextReveal } from "../assets/js/textReveal";

const hovering = ref("");

defineProps({
  text: String,
  imageUrl: String,
});

const enter = (el) => {
  const animation = new TextReveal(el);
  animation.in();
};
</script>

<style scoped>
h2 {
  padding-bottom: calc(var(--content-spacing-y--large) / 2);
}

img {
  width: var(--image-width);
  margin-bottom: calc(var(--content-spacing-y--large) / -2);
  margin-left: var(--content-spacing-x--large);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25);
}

.highlight {
  color: var(--color-highlight);
}
</style>
