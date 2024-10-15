<!-- src/views/Login.vue -->
<template>
  <DefaultLayout>
    <div class="max-w-md mx-auto">
      <h2 class="text-xl mb-4">Login</h2>
      <form @submit.prevent="login">
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
        <Button type="submit">Login</Button>
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

    const login = () => {
      // Tizimga kirish logikasi
      console.log('Logging in:', email.value, password.value);
    };

    return {
      email,
      password,
      login,
    };
  },
});
</script>

<style scoped>
/* Qo'shimcha uslublar */
</style>
