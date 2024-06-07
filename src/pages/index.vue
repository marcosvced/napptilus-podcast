<script setup lang="ts">
import {useNormalizeString} from "~/src/core/common/infrastructure/composables/useNormalizeString";
import {podcastPresenter} from "~/src/core/podcast/presenters/PodcastPresenter";
import AChip from "~/src/lib/ui/atoms/a-chip.vue";
import AInput from "~/src/lib/ui/atoms/a-input.vue";

const store = podcastPresenter()
const filter: Ref<string> = ref('')
const podcastFiltered = computed(() =>
    store.state
        ? store.state.filter(
            (podcast) => useNormalizeString(podcast.author).includes(useNormalizeString(filter.value))
                || useNormalizeString(podcast.title).includes(useNormalizeString(filter.value)))
        : [])
const onInput = (payload: string) => {
  filter.value = payload
}
</script>

<template>
  <main class="p-podcast-browser -m-x(20)">
    <section class="p-podcast-browser__head">
      <a-chip class="head__counter">{{ podcastFiltered.length }}</a-chip>
      <a-input :value="filter" @update:value="onInput"/>
    </section>
    <ul class="p-podcast-browser__list">
      <nuxt-link
          v-for="podcast in podcastFiltered"
          :key="podcast.id"
          :to="{name: 'podcast-podcastId', params: {podcastId: podcast.id}}">
        <li class="list__item -depth(100) -p-x(4) -p-b(8) -p-t(12)">
          <nuxt-picture class="item__figure" format="webp" :src="podcast.img.url.x1" height="60" width="60"/>
          <span class="item__title">{{ podcast.title }}</span>
          <span class="item__author">Author: {{ podcast.author }}</span>
        </li>
      </nuxt-link>
    </ul>
  </main>
</template>

<style scoped>
.p-podcast-browser__head {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @apply -gap(4);
}

.p-podcast-browser__list {
  @apply -row-gap(20) -column-gap(10) -p-y(32);
  display: flex;
  flex-wrap: wrap;
}

.p-podcast-browser__list > * {
  flex-grow: 1;
  width: calc(100% / 2);
}

@screen md {
  .p-podcast-browser__list > * {
    width: calc(100% / 5);
  }
}

@screen xl {
  .p-podcast-browser__list > * {
    width: calc(100% / 6);
  }
}

.list__item {
  @apply -height(100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  text-align: center;
}

.item__figure {
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.item__title {
  text-transform: uppercase;
  font-size: calc(calc(14 / 16) * 1rem);
}

.item__author {
  font-size: calc(calc(12 / 16) * 1rem);
  color: gray;
}

.item__title,
.item__author {
  white-space: nowrap;
  max-width: calc(calc(150 / 16) * 1rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>