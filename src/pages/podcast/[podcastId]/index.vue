<script setup lang="ts">
import {episodePresenter} from '~/src/core/episode/presenter/EpisodePresenter'

const store = episodePresenter()
const {params: {podcastId: id}} = useRoute()
await useAsyncData('episodes', () => store.getEpisodes(id))
</script>

<template>
  <section class="p-podcast__episodes" v-if="store.state">
    <div class="episodes__header">
      <h2>Episodes: {{ store.getLength() }}</h2>
    </div>
    <ul class="episodes__list">
      <li class="list__header">
        <span>Title</span>
        <span>Date</span>
        <span>Duration</span>
      </li>
      <nuxt-link v-for="episode in store.state"
                 :key="episode.id"
                 :to="{name:'podcast-podcastId-episode-episodeId', params:{podcastId:id, episodeId: episode.id}}">
        <li class="list__episode">
          <span>{{ episode.title }}</span>
          <span>{{ episode.date }}</span>
          <span>{{ episode.duration }}</span>
        </li>
      </nuxt-link>
    </ul>
  </section>
</template>

<style scoped>

</style>