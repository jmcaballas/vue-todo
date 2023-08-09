<template>
  <div class="flex justify-between items-center my-4 space-x-3">
    <h3
      class="shrink basis-1/2 mt-3 text-left [overflow-wrap:anywhere]"
      :class="{ done: props.todoItem.done }"
    >
      {{ props.todoItem.todoText }}
    </h3>
    <input type="checkbox" v-model="isDone" class="checkbox" />
    <button @click="openEditModal" class="btn btn-accent">Edit</button>
    <button @click="deleteItem" class="btn btn-secondary">Delete</button>
    <TodoEditModal
      v-if="showEditModal"
      :originalText="props.todoItem.todoText"
      :index="props.index"
      @closeEditModal="closeEditModal"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import TodoEditModal from "@/components/TodoEditModal.vue";

const props = defineProps<{
  todoItem: {
    todoText: string;
    done: boolean;
  };
  index: number;
}>();
const emit = defineEmits(["deleteItem", "editDone"]);

const showEditModal = ref(false);

const isDone = computed({
  get() {
    return props.todoItem.done;
  },
  set() {
    emit("editDone", props.index, !props.todoItem.done);
  },
});

const deleteItem = () => {
  emit("deleteItem", props.index);
};

const openEditModal = () => {
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
};
</script>

<style>
/* .todo-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  margin: 10px 0;
} */
.done {
  text-decoration: line-through;
}
</style>
