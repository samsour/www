<template>
  <footer :class="{ 'is-active': isActive }">
    <div class="content row">
      <button type="button" @click="isActive = !isActive">
        {{ isActive ? close : imprint }}
      </button>

      <div v-show="isActive" class="row contact">
        <span v-html="address"></span>
        <div class="column">
          <a
            v-if="mail"
            :href="`mailto:${mail}?subject=What%27s%20up%3F`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ mail }}
          </a>
          <a v-if="phone" :href="`tel:${phone}`">{{ phone }}</a>
        </div>
      </div>

      <span v-show="!isActive" class="note">{{ note }}</span>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  isActive: false,
  imprint: String,
  close: String,
  note: String,
  address: String,
  mail: String,
  phone: String,
});
</script>

<style scoped>
footer {
  background-color: var(--color-primary);
  position: relative;
  padding: var(--content-spacing-y) var(--content-spacing-x--large);
}

footer::before {
  content: "";
  background-color: var(--color-secondary);
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0%;
  width: 100%;
  z-index: 1;
  display: block;
  transition: height 500ms ease-in-out;
}

footer.is-active::before {
  height: 100%;
}

.content {
  min-height: 140px;
}

.row {
  color: var(--color-white);
  mix-blend-mode: difference;
  position: relative;
  z-index: 2;
}

.contact,
.note {
  opacity: 0;
}

footer.is-active .contact,
.note {
  animation: var(--animation--fade-in);
  animation-delay: 500ms;
}

button {
  color: var(--color-secondary);
  font-size: 1rem;
  cursor: pointer;
  display: block;
  padding: 20px;
  transform: translate(-20px, -20px);
}
</style>
