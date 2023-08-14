<template>
  <div class="container mx-auto my-8">
    <form
      @submit.prevent="todo.addItem(newItem)"
      class="flex justify-between items-center space-x-4"
    >
      <input
        v-model="newItem"
        type="text"
        class="input w-full input-bordered"
        placeholder="Add item"
      />
      <button class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/store/todo";

const todo = useTodoStore();

const newItem = ref<string>("");
</script>
