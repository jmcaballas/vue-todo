<template>
  <div class="container mx-auto px-5 prose text-center">
    <h1 class="mt-4">Todo App</h1>
    <input @click="toggleTheme" type="checkbox" class="toggle" />
    <TodoInput />
    <TodoItem
      v-for="(todoItem, index) in todo.todoItems"
      :key="index"
      :todoItem="todoItem"
      :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useTodoStore } from "@/store/todo";
import TodoInput from "@/components/TodoInput.vue";
import TodoItem from "@/components/TodoItem.vue";

const todo = useTodoStore();
const theme = ref(localStorage.getItem("theme") || "pastel");

const toggleTheme = () => {
  theme.value = theme.value === "night" ? "pastel" : "night";
};

onMounted(() => {
  document.querySelector("html")?.setAttribute("data-theme", theme.value);
});

watch(theme, (newTheme) => {
  document.querySelector("html")?.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
</script>
