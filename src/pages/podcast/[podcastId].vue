<script setup lang="ts">
import {podcastPresenter} from '~/src/core/podcast/presenters/PodcastPresenter'
import {episodePresenter} from '~/src/core/episode/presenter/EpisodePresenter'

const podcastStore = podcastPresenter()
const episodeStore = episodePresenter()
const {params: {podcastId: id}} = useRoute()
await useAsyncData('episodes', () => episodeStore.getEpisodes(id))
const podcast = podcastStore.getPodcast(id)
</script>

<template>
  <main class="p-podcast">
    <article v-if="podcast" class="p-podcast__sidebar">
      <nuxt-picture class="sidebar__figure" format="webp" :src="podcast.img.url.x2" height="170"/>

      <div class="sidebar__info">
        <span class="info__title">{{ podcast.title }}</span>
        <span class="info__author">{{ podcast.author }}</span>
      </div>
      <div class="sidebar__description">
        <span class="description__title">Description</span>
        <span class="description__body">{{ podcast.summary }}</span>
      </div>

    </article>
    <nuxt-page/>
  </main>
</template>

<style scoped>

</style>