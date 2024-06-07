<script setup lang="ts">
import type {PodcastId} from "~/src/core/podcast/domain/entities/PodcastId";
import type {Media} from "~/src/core/common/domain/entities/Media";

withDefaults(defineProps<{
  id: PodcastId,
  title: string,
  author: string,
  img: Media
}>(),{})
</script>

<template>
  <nuxt-link
      :to="{name: 'podcast-podcastId', params: {podcastId: id}}">
    <div class="card -depth(100) -p-x(4) -p-b(8) -p-t(12)">
      <nuxt-picture class="card__figure" format="webp" :src="img.url.x1" height="60" width="60"/>
      <span class="card__title">{{ title }}</span>
      <span class="card__author">Author: {{ author }}</span>
    </div>
  </nuxt-link>
</template>

<style scoped>
.card {
  @apply -height(100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  text-align: center;
}

.card__figure {
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.card__title {
  text-transform: uppercase;
  font-size: calc(calc(14 / 16) * 1rem);
}

.card__author {
  font-size: calc(calc(12 / 16) * 1rem);
  color: gray;
}

.card__title,
.card__author {
  white-space: nowrap;
  max-width: calc(calc(150 / 16) * 1rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>