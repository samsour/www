<template>
  <footer>
    <button type="button" @click="isActive = !isActive">{{ isActive ? close : imprint }}</button>
    <span v-show="!isActive">{{ note }}</span>
    <div v-show="isActive">
      <span>{{ address }}</span>
      <a :href="`mailto:${mail}?subject=What%27s%20up%3F`">{{ mail }}</a>
      <a :href="`tel:${phone}`">{{ phone }}</a>
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

<style scoped></style>
