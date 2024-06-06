<script setup lang="ts">
import {episodePresenter} from '~/src/core/episode/presenter/EpisodePresenter'

const {params: {episodeId}} = useRoute()
const store = episodePresenter()
const episode = store.getEpisode(parseInt(episodeId))
</script>

<template>
  <div class="p-podcast__episode">
    <h2 class="episode__header">
      {{ episode.title }}
    </h2>
    <p class="episode__description" v-html="episode.description"/>
    <audio controls :src="episode.url" class="episode__audio">
      Your browser doesn't support audio
    </audio>
  </div>
</template>

<style scoped>

</style>