<script setup lang="ts">
</script>

<template>
  <span class="a-chip -p-x(4) -p-y(1)">
    <slot/>
  </span>
</template>

<style scoped lang="css">
.a-chip {
  display: block;
  width: min-content;
  background-color: cornflowerblue;
  color: white;
  border-radius: 4px;
}
</style>