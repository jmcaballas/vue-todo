<template>
  <div class="home">
    <TodoInput @addItem="addItem" />
    <TodoItem
      v-for="(todoItem, index) in todoItems"
      :key="index"
      :item="todoItem"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoItem from "@/components/TodoItem.vue";

const todoItems = ref<string[]>([]);

const addItem = (newItem: string) => {
  todoItems.value.push(newItem);
};
</script>
