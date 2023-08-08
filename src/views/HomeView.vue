<template>
  <div class="home">
    <TodoInput @addItem="addItem" />
    <div v-for="item in todoItems" :key="item">
      <h1>{{ item }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoInput from "@/components/TodoInput.vue";

const todoItems = ref<string[]>([]);

const addItem = (newItem: string) => {
  todoItems.value.push(newItem);
};
</script>
