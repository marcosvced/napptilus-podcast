<script setup lang="ts">
import {useNormalizeString} from "~/src/core/common/infrastructure/composables/useNormalizeString";
import {podcastPresenter} from "~/src/core/podcast/presenters/PodcastPresenter";

const store = podcastPresenter()
const filter: Ref<string> = ref('')
const podcastFiltered = computed(() =>
    store.state
        ? store.state.filter(
            (podcast) => useNormalizeString(podcast.author).includes(useNormalizeString(filter.value))
                || useNormalizeString(podcast.title).includes(useNormalizeString(filter.value)))
        : [])
</script>

<template>
  <main class="p-podcast-browser">
    <section class="p-podcast-browser__head">
      <span class="head__counter">{{ podcastFiltered.length }}</span>
      <input type="text" class="head__filter" v-model="filter"/>
    </section>
    <ul class="p-podcast-browser__list">
      <nuxt-link
          v-for="podcast in podcastFiltered"
          :key="podcast.id"
          :to="{name: 'podcast-podcastId', params: {podcastId: podcast.id}}">
        <li class="list__item">
          <figure class="item__figure">
            <img :src="podcast.img.url.x1" alt="">
          </figure>
          <span class="item__title">{{ podcast.title }}</span>
          <span class="item__author">Author: {{podcast.author}}</span>
        </li>
      </nuxt-link>
    </ul>
  </main>
</template>

<style scoped>

</style>