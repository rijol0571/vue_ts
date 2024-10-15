<!-- src/views/Register.vue -->
<template>
    <DefaultLayout>
      <div class="max-w-md mx-auto">
        <h2 class="text-xl mb-4">Register</h2>
        <form @submit.prevent="register">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="border p-2 w-full mb-4"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="border p-2 w-full mb-4"
            required
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </DefaultLayout>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import DefaultLayout from '../layout/DefaultLayout.vue';
  
  export default defineComponent({
    components: { DefaultLayout },
    setup() {
      const email = ref('');
      const password = ref('');
  
      const register = () => {
        // Ro'yxatdan o'tish logikasi
        console.log('Registering:', email.value, password.value);
      };
  
      return {
        email,
        password,
        register,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Qo'shimcha uslublar */
  </style>
  