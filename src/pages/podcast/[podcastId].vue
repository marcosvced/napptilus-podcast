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
  <main class="p-podcast -grid -columns(24) -p-y(8)">
    <article v-if="podcast" class="p-podcast__sidebar -depth(100) -column-start(2) -column-span(4) -p-x(4) -p-y(8)">
      <nuxt-picture class="sidebar__figure -p-b(4)" format="webp" :src="podcast.img.url.x2" height="170" width="170"/>

      <div class="sidebar__info -p-y(4)">
        <span class="info__title -m-b(2)">{{ podcast.title }}</span>
        <span class="info__author">by {{ podcast.author }}</span>
      </div>
      <div class="sidebar__description -p-y(4)">
        <span class="description__title -m-b(2)">Description:</span>
        <span class="description__body" v-html="podcast.summary"/>
      </div>

    </article>
    <nuxt-page class="-column-start(8) -column-span(16)"/>
  </main>
</template>

<style scoped>
.p-podcast__sidebar {
  border-radius: calc(calc(8 / 16) * 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
}

.sidebar__info {
  @apply -width(100%);

  border-top: calc(calc(1 / 16) * 1rem) solid theme('colors.light-100');
  border-bottom: calc(calc(1 / 16) * 1rem) solid theme('colors.light-100');

  > * {
    display: block;
  }
}


.sidebar__description {
  @apply -width(100%);
  .description__title {
    font-size: calc(calc(14/16) * 1rem);
  }
  > * {
    display: block;
  }
}
.description__title,
.info__title {
  font-weight: bolder;
}

.description__body,
.info__author {
  font-size: calc(calc(12 / 16) * 1rem);
  font-style: italic;
}
</style>