<template>
  <div class="backdrop" @click.self="closeEditModal">
    <div class="modal">
      <form @submit.prevent="saveEdit">
        <input v-model="editedText" type="text" />
        <button>Save</button>
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
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
</style>
