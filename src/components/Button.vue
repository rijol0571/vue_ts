<!-- src/components/Button.vue -->
<template>
  <button class="bg-blue-500 text-white py-2 px-4 rounded" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
});
</script>

<style scoped>
/* Sizning tugma uchun qo'shimcha uslublaringiz */
</style>
