<template>
  <div class="container mx-auto px-5 prose text-center">
    <h1 class="mt-4">Todo App</h1>
    <input @click="toggleTheme" type="checkbox" class="toggle" />
    <TodoInput @addItem="addItem" />
    <TodoItem
      v-for="(todoItem, index) in todoItems"
      :key="index"
      :todoItem="todoItem"
      :index="index"
      @editDone="editDone"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref, watch } from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoItem from "@/components/TodoItem.vue";

const theme = ref("pastel");

const toggleTheme = () => {
  theme.value = theme.value === "night" ? "pastel" : "night";
};

onMounted(() => {
  document.querySelector("html")?.setAttribute("data-theme", theme.value);
});

watch(theme, (newTheme) => {
  document.querySelector("html")?.setAttribute("data-theme", newTheme);
});

const todoItems = ref<Array<{ todoText: string; done: boolean }>>(
  JSON.parse(localStorage.getItem("todoItems") || "[]") || []
);

const addItem = (newItem: string) => {
  todoItems.value.push({ todoText: newItem, done: false });
  saveToLocalStorage();
};

const editItem = (index: number, newText: string) => {
  todoItems.value[index].todoText = newText;
  saveToLocalStorage();
};

const editDone = (index: number, newDone: boolean) => {
  todoItems.value[index].done = newDone;
  saveToLocalStorage();
};

const deleteItem = (index: number) => {
  todoItems.value.splice(index, 1);
  saveToLocalStorage();
};

const saveToLocalStorage = () => {
  localStorage.setItem("todoItems", JSON.stringify(todoItems.value));
};

onMounted(() => {
  if (localStorage.getItem("todoItems")) {
    const savedTodoItems = JSON.parse(
      localStorage.getItem("todoItems") || "[]"
    );
    todoItems.value = savedTodoItems;
  }
});

provide("editItem", editItem);
</script>
