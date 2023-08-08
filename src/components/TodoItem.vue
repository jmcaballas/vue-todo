<template>
  <div class="todo-item">
    <h3>{{ props.todoItem.todoText }}</h3>
    <input type="checkbox" :checked="props.todoItem.done" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  todoItem: {
    todoText: string;
    done: boolean;
  };
}>();
</script>

<style>
.todo-item {
  background: rgba(185, 156, 156, 0.185);
  width: 400px;
  margin: 10px 0;
}
</style>
