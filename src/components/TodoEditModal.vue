<template>
  <div class="backdrop" @click.self="closeEditModal">
    <div class="modal-form">
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
import { inject, ref } from "vue";

const props = defineProps<{
  originalText: string;
  index: number;
}>();
const emit = defineEmits(["closeEditModal"]);
const editItem = inject<
  ((index: number, editedText: string) => void) | undefined
>("editItem");

const editedText = ref(props.originalText);

const saveEdit = () => {
  if (editItem) {
    editItem(props.index, editedText.value);
    closeEditModal();
  }
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
  background: white;
  border-radius: 10px;
}
</style>
