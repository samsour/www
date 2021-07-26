<template>
  <footer :class="{ 'is-active': isActive }">
    <div class="row">
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

      <span v-show="!isActive">{{ note }}</span>
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
  background: var(--color-primary);
  padding: var(--content-spacing-y) var(--content-spacing-x--large)
    calc(var(--content-spacing-y) * 2);
  color: var(--color-secondary);
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
