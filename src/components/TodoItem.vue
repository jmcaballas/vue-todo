<template>
  <div class="todo-item">
    <h2 class="text">{{ props.todoItem.todoText }}</h2>
    <button @click="openEditModal" class="edit">Edit</button>
    <input type="checkbox" :checked="props.todoItem.done" class="check" />
    <TodoEditModal
      v-if="showEditModal"
      :originalText="props.todoItem.todoText"
      @closeEditModal="closeEditModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoEditModal from "@/components/TodoEditModal.vue";

const props = defineProps<{
  todoItem: {
    todoText: string;
    done: boolean;
  };
}>();

const showEditModal = ref(false);

const openEditModal = () => {
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
};

// const editItem = (newText: string) => {
//   emit("editTodoItem", newText);
//   closeEditModal();
// };
</script>

<style>
.todo-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  margin: 10px 0;
  background: rgba(185, 156, 156, 0.185);
}
.text {
  flex: 4;
}
.edit {
  flex: 1;
}
.check {
  flex: 1;
}
</style>
