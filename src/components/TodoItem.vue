<template>
  <div>
    <h1>{{ props.item }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: string;
}>();
</script>
