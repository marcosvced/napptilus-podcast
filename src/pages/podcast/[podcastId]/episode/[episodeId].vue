<script setup lang="ts">
import {episodePresenter} from '~/src/core/episode/presenter/EpisodePresenter'

const {params: {episodeId}} = useRoute()
const store = episodePresenter()
const episode = ref()
try {
  episode.value = store.getEpisode(parseInt(episodeId))
} catch (e) {
  console.error(e)
}
</script>

<template>
  <div class="p-podcast__episode -depth(100) -p-x(4) -p-y(4)" v-if="episode">
    <h2 class="episode__header -m-b(8)">
      {{ episode.title }}
    </h2>
    <p class="episode__description -m-b(8)" v-html="episode.description"/>
    <audio controls :src="episode.url" class="episode__audio">
      Your browser doesn't support audio
    </audio>
  </div>
</template>

<style scoped>
.p-podcast__episode {
  height: fit-content;
}

audio {
  width: 100%;
  height: calc(calc(28 / 16) * 1rem);
}

audio::-webkit-media-controls-panel {
  background-color: theme('colors.light-100');
}

audio::-webkit-media-controls-timeline {
  background-color: theme('colors.light-100');
}
</style>