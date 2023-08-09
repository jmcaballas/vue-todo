<template>
  <div class="todo-item">
    <h2 class="text" :class="{ done: props.todoItem.done }">
      {{ props.todoItem.todoText }}
    </h2>
    <input type="checkbox" v-model="isDone" class="check" />
    <button @click="openEditModal" class="edit">Edit</button>
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
const emit = defineEmits(["editDone"]);

const showEditModal = ref(false);

const isDone = computed({
  get() {
    return props.todoItem.done;
  },
  set() {
    emit("editDone", props.index, !props.todoItem.done);
  },
});

const openEditModal = () => {
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
};
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
.done {
  text-decoration: line-through;
}
.edit {
  flex: 1;
}
.check {
  flex: 1;
}
</style>
