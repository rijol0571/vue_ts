<!-- src/components/TodoList.vue -->
<template>
  <div>
    <h2 class="text-lg font-bold">Todo List</h2>
    <div v-if="todos.length === 0" class="text-gray-500">No todos available.</div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" :onToggle="toggleTodo" :onDelete="deleteTodo" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo } from '../types/types'; // Interface import qilish
import TodoItem from './TodoItem.vue';

export default defineComponent({
  components: { TodoItem },
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true
    },
    onToggle: {
      type: Function,
      required: true
    },
    onDelete: {
      type: Function,
      required: true
    }
  },
  methods: {
    toggleTodo(todo: Todo) {
      this.onToggle(todo);
    },
    deleteTodo(id: number) {
      this.onDelete(id);
    }
  }
});
</script>

<style scoped>
/* Sizning ToDo ro'yxatiga qo'shimcha uslublaringiz */
</style>
