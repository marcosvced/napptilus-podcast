<script setup lang="ts">
withDefaults(defineProps<{ value: string }>(), {})
const emit = defineEmits<{ (event: 'update:value', value: string): void }>()
const onInput = (event: any) => {
  emit('update:value', event.target.value)
}
</script>

<template>
  <input type="text" :value="value" @input="onInput" class="-p-x(4) -p-y(2)">
</template>

<style scoped>
input {
  border-radius: 4px;
  background-color: white;
  border: 1px solid #D9DBE9;
  color: #4E4B66;
}
</style>