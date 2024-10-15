<!-- src/layout/DefaultLayout.vue -->
<template>
    <div class="min-h-screen flex flex-col">
      <header class="bg-gray-800 text-white p-4">
        <h1 class="text-2xl">ToDo App</h1>
      </header>
      <main class="flex-1 p-4">
        <slot></slot>
      </main>
      <footer class="bg-gray-800 text-white p-4 text-center">
        © 2024 ToDo App
      </footer>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  /* Qo'shimcha uslublar */
  </style>
  