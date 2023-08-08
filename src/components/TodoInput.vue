<template>
  <input v-model="newItem" type="text" />
  <button @click="addItem(newItem)">Add</button>
  <div v-for="item in items" :key="item">
    <h2>{{ item }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newItem = ref<string>("");
const items = ref<string[]>([]);

const addItem = (newItemValue: string) => {
  items.value.push(newItemValue);
  newItem.value = "";
};
</script>
