// src/composables/useTodos.ts
import { ref } from 'vue';
import { Todo } from '../types/types';

export const useTodos = () => {
  const todos = ref<Todo[]>([]); // ToDo ro'yxatini saqlash

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    todos.value.push(newTodo);
  };

  const toggleTodo = (todo: Todo) => {
    const index = todos.value.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      todos.value[index].completed = !todos.value[index].completed;
    }
  };

  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
