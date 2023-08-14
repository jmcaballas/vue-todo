<template>
  <div class="backdrop" @click.self="closeEditModal">
    <div class="modal-form card w-96 bg-base-100">
      <form @submit.prevent="saveEdit">
        <input
          v-model="editedText"
          type="text"
          class="input w-full input-bordered"
        />
        <button class="btn btn-primary mt-5">Save</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/store/todo";

const todo = useTodoStore();

const props = defineProps<{
  originalText: string;
  index: number;
}>();
const emit = defineEmits(["closeEditModal"]);

const editedText = ref(props.originalText);

const saveEdit = () => {
  todo.editText(props.index, editedText.value);
  closeEditModal();
};

const closeEditModal = () => {
  emit("closeEditModal");
};
</script>

<style>
.backdrop {
  top: 0;
  right: 0;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal-form {
  width: 400px;
  margin: 0 20px;
  padding: 20px;
  border-radius: 10px;
}
</style>
