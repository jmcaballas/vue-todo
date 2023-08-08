<template>
  <form @submit.prevent="addItem">
    <input v-model="newItem" type="text" />
    <button>Add</button>
  </form>
  <div v-for="item in items" :key="item">
    <h2>{{ item }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newItem = ref<string>("");
const items = ref<string[]>([]);

const emit = defineEmits(["addItem"]);

const addItem = () => {
  emit("addItem", newItem.value);
  newItem.value = "";
};
</script>
