<script setup lang="ts">
import {useNormalizeString} from "~/src/core/common/infrastructure/composables/useNormalizeString";
import {podcastPresenter} from "~/src/core/podcast/presenters/PodcastPresenter";
import AChip from "~/src/lib/ui/atoms/a-chip.vue";
import AInput from "~/src/lib/ui/atoms/a-input.vue";
import MPodcastCard from "~/src/lib/ui/molecules/m-podcast-card.vue";

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
      <li v-for="podcast in podcastFiltered"
          :key="podcast.id">
        <m-podcast-card :id="podcast.id" :title="podcast.title" :img="podcast.img" :author="podcast.author"/>
      </li>
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


</style>