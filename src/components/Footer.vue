<template>
  <footer>
    <div class="row">
      <button type="button" @click="isActive = !isActive">{{ isActive ? close : imprint }}</button>

      <div v-show="isActive" class="row contact">
        <span v-html="address"></span>
        <div class="column">
          <a :href="`mailto:${mail}?subject=What%27s%20up%3F`" target="_blank">{{ mail }}</a>
          <a :href="`tel:${phone}`">{{ phone }}</a>
        </div>
      </div>

      <span v-show="!isActive">{{ note }}</span>
    </div>

  </footer>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  isActive: false,
  imprint: String,
  close: String,
  note: String,
  address: String,
  mail: String,
  phone: String,
})
</script>

<style scoped>
footer {
  background: var(--color-primary);
  padding: var(--content-spacing-y--large) var(--content-spacing-x);
  color: var(--color-secondary);
}

.row, .column {
  display: flex;
  justify-content: space-between;
}

.column {
  flex-direction: column;
}

.contact {
  flex-grow: 1;
  margin-left: 
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
