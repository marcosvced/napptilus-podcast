<script setup lang="ts">
import {podcastPresenter} from '~/src/core/podcast/presenters/PodcastPresenter'
import MHeader from '~/src/lib/ui/molecules/m-header.vue'


const store = podcastPresenter()
await store.getPodcasts()


</script>

<template>
  <m-header/>
  <NuxtPage/>
</template>
