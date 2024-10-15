<!-- src/views/Dashboard.vue -->
<template>
  <DefaultLayout>
    <div>
      <h2 class="text-xl mb-4">My ToDo List</h2>
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new todo"
        class="border p-2 w-full mb-4"
      />
      <TodoList :todos="todos" :onToggle="toggleTodo" :onDelete="deleteTodo" />
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTodoStore } from '../stores/todos';
import TodoList from '../components/TodoList.vue';
import DefaultLayout from '../layout/DefaultLayout.vue';

export default defineComponent({
  components: { TodoList, DefaultLayout },
  setup() {
    const store = useTodoStore();
    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim()) {
        store.addTodo(newTodo.value.trim());
        newTodo.value = '';
      }
    };

    const toggleTodo = (todo) => {
      store.toggleTodo(todo);
    };

    const deleteTodo = (id) => {
      store.deleteTodo(id);
    };

    return {
      newTodo,
      todos: store.todos,
      addTodo,
      toggleTodo,
      deleteTodo,
    };
  },
});
</script>

<style scoped>
/* Qo'shimcha uslublar */
</style>
