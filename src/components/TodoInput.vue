<template>
  <input v-model="newItem" type="text" />
  <button @click="addItem(newItem)">Add</button>
  <div v-for="item in items" :key="item">
    <h2>{{ item }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newItem = ref(null);
const items = ref([]);

const addItem = () => {
  items.value.push(newItem.value);
  newItem.value = "";
};
</script>
