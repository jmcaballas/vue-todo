<template>
  <div class="backdrop" @click.self="closeEditModal">
    <div class="modal">
      <input v-model="editedText" type="text" />
      <button @click="saveEdit">Save</button>
      <!-- <button @click="closeEdit">Cancel</button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  originalText: string;
}>();

const emit = defineEmits(["editItem", "closeEditModal"]);

const editedText = ref(props.originalText);

const saveEdit = () => {
  emit("editItem", editedText.value);
  console.log("save");
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
