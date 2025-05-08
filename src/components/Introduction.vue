<template>
  <section>
    <transition-group tag="h1" appear @enter="enter">
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
            web-based applications
          </span>
        </div>
      </div>

      <div class="hehe" key="6">
        <div class="hehe__inner">
          <span
            @mouseover="hovering = 'krekeny'"
            @mouseleave="hovering = ''"
            :class="{ highlight: hovering === 'krekeny' }"
          >
            <a
              href="//www.krekeny.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              @krekeny </a
            >.
          </span>
        </div>
      </div>
    </transition-group>

    <ProfileImage />
  </section>
</template>

<script setup>
import ProfileImage from "./ProfileImage.vue";
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

/* .highlight {
  color: var(--color-highlight);
} */

.highlight a {
  color: var(--color-highlight);
}
a {
  text-decoration: none;
  position: relative;
}

a::after {
  --indentation: 22%;
  width: calc(100% - var(--indentation));
  left: var(--indentation);
  background-color: currentColor;
  content: "";
  display: block;
  position: absolute;
  bottom: 0.25vw;
  height: 0.7vw;
}

@media screen and (min-width: 1200px) {
  a::after {
    bottom: 0.15vw;
    height: 0.5vw;
  }
}

@media screen and (min-width: 1920px) {
  a::after {
    bottom: 5px;
    height: 10px;
  }
}
</style>
