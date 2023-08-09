<template>
  <div class="home">
    <TodoInput @addItem="addItem" />
    <div class="todo-item-container">
      <TodoItem
        v-for="(todoItem, index) in todoItems"
        :key="index"
        :todoItem="todoItem"
        :index="index"
        @editDone="editDone"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoItem from "@/components/TodoItem.vue";

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

<style>
.todo-item-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
