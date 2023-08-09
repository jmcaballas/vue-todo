<template>
  <div class="container mx-auto my-8">
    <form
      @submit.prevent="addItem"
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

const newItem = ref<string>("");

const emit = defineEmits(["addItem"]);

const addItem = () => {
  emit("addItem", newItem.value);
  newItem.value = "";
};
</script>
