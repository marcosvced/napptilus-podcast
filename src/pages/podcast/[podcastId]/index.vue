<script setup lang="ts">
import {episodePresenter} from '~/src/core/episode/presenter/EpisodePresenter'
import {useMillisecondsToTime} from '../../../core/common/infrastructure/composables/useMillisecondsToTime'

const store = episodePresenter()
const {params: {podcastId: id}} = useRoute()
await useAsyncData('episodes', () => store.getEpisodes(id))
</script>

<template>
  <section class="p-podcast__episodes" v-if="store.state">
    <div class="episodes__header -depth(100) -p-x(4) -p-y(4) -m-b(8)">
      <h2>Episodes: {{ store.getLength() }}</h2>
    </div>
    <ul class="episodes__list -depth(100) -p-x(4) -p-y(8)">
      <li class="list__header ">
        <span>Title</span>
        <span>Date</span>
        <span>Duration</span>
      </li>
      <li class="list__episode" v-for="episode in store.state" :key="episode.id">
        <nuxt-link :to="{name:'podcast-podcastId-episode-episodeId', params:{podcastId:id, episodeId: episode.id}}">
          <span>{{ episode.title }}</span>
        </nuxt-link>
        <span>{{ episode.date.toLocaleDateString() }}</span>
        <span>{{ useMillisecondsToTime(episode.duration, {format: "HH:MM"}) }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.episodes__list,
.episodes__header {
  border-radius: calc(calc(8 / 16) * 1rem);
}

.episodes__list {
  display: table;
  width: 100%;

  > li,
  > a > li {
    display: table-row;
  }

  > a {
    display: contents;
  }

  > li {
    span:last-child {
      text-align: center;
    }

    > * {
      border-bottom: 1px solid #B2B4BF;
    }

    a {
      width: 100%;
      display: block;
    }

    span {
      @apply -p-y(2) -p-x(2);
      display: table-cell;
    }


    span:first-of-type {
      flex-grow: 1;
    }
  }
}

li:nth-child(even) {
  background-color: theme('colors.light-100');
}

.list__header {
  @apply -gap(4);
  align-items: center;
  justify-content: space-between;
  display: table-header-group;

  span {
    border-bottom: calc(calc(2 / 16) * 1rem) solid #B2B4BF !important;
  }

  span:last-child {
    width: 1px;
  }
}


</style>