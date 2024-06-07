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
  border-radius: calc(calc(4/16) * 1rem);
  background-color: theme('colors.light');
  border: calc(calc(1/16) * 1rem) solid theme('colors.light-100');
  color: theme('colors.ash');
}
</style>