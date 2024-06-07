<script setup lang="ts">
const {isLoading} = useLoadingIndicator()
</script>

<template>
  <header class="m-header -p-x(4)">
    <nuxt-link to="/">
      <b>Podcaster</b>
    </nuxt-link>
    <div class="loader" v-if="isLoading"></div>
  </header>
</template>

<style scoped lang="css">
header {
  border-bottom: 2px solid theme('colors.light-100');
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: theme('colors.light');
  height: calc(calc(65 / 16) * 1rem);
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 65px;
  aspect-ratio: 1;
  position: relative;
  transform: scale(.5);
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  border-radius: 50px;
  box-shadow: 0 0 0 3px inset #000;
  animation: l5 2.5s infinite;
}

.loader:after {
  animation-delay: -1.25s;
  border-radius: 0;
}

@keyframes l5 {
  0% {
    inset: 0 35px 35px 0
  }
  12.5% {
    inset: 0 35px 0 0
  }
  25% {
    inset: 35px 35px 0 0
  }
  37.5% {
    inset: 35px 0 0 0
  }
  50% {
    inset: 35px 0 0 35px
  }
  62.5% {
    inset: 0 0 0 35px
  }
  75% {
    inset: 0 0 35px 35px
  }
  87.5% {
    inset: 0 0 35px 0
  }
  100% {
    inset: 0 35px 35px 0
  }
}
</style>