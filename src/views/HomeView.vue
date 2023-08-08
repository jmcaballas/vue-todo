<template>
  <div class="home">
    <TodoInput @addItem="addItem" />
    <div class="todo-item-container">
      <TodoItem
        v-for="(todoItem, index) in todoItems"
        :key="index"
        :todoItem="todoItem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoItem from "@/components/TodoItem.vue";

const todoItems = ref<Array<{ todoText: string; done: boolean }>>([]);

const addItem = (newItem: string) => {
  todoItems.value.push({ todoText: newItem, done: false });
};
</script>

<style>
.todo-item-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
