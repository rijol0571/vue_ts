<!-- src/components/TodoItem.vue -->
<template>
  <div class="flex items-center justify-between p-4 border-b">
    <div>
      <input type="checkbox" v-model="todo.completed" @change="toggleComplete" />
      <span :class="{ 'line-through': todo.completed }">{{ todo.title }}</span>
    </div>
    <Button @click="removeTodo">Delete</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '../types/types'; // Interface import qilish
import Button from './Button.vue';

export default defineComponent({
  components: { Button },
  props: {
    todo: {
      type: Object as () => Todo,
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
    toggleComplete() {
      this.onToggle(this.todo);
    },
    removeTodo() {
      this.onDelete(this.todo.id);
    }
  }
});
</script>

<style scoped>
/* Sizning ToDo elementiga qo'shimcha uslublaringiz */
.line-through {
  text-decoration: line-through;
}
</style>
