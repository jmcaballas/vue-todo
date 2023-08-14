<template>
  <div class="flex justify-between items-center my-4 space-x-3">
    <h3
      class="shrink basis-1/2 mt-3 text-left [overflow-wrap:anywhere]"
      :class="{ done: todoItems[props.index].done }"
    >
      {{ props.todoItem.todoText }}
    </h3>
    <input
      type="checkbox"
      :checked="todo.todoItems[props.index].done"
      @change="editDone(props.index)"
      class="checkbox"
    />
    <button @click="openEditModal" class="btn btn-accent">Edit</button>
    <button @click="deleteItem(props.index)" class="btn btn-secondary">
      Delete
    </button>
    <TodoEditModal
      v-if="showEditModal"
      :originalText="props.todoItem.todoText"
      :index="props.index"
      @closeEditModal="closeEditModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import TodoEditModal from "@/components/TodoEditModal.vue";
import { useTodoStore } from "@/store/todo";

const todo = useTodoStore();
const { todoItems } = storeToRefs(todo);
const { editDone, deleteItem } = todo;

const props = defineProps<{
  todoItem: {
    todoText: string;
    done: boolean;
  };
  index: number;
}>();

const showEditModal = ref(false);

const openEditModal = () => {
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
