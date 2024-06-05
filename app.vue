<script setup lang="ts">
import {onMounted} from "vue";
import {ApiClientImpl} from "~/src/ApiClientImpl";

import {GetEpisodesUseCase} from "~/src/core/episode/application/actions/GetEpisodesUseCase";
import {EpisodeRepositoryImpl} from "~/src/core/episode/adapters/repositories/EpisodeRepositoryImpl";
import {EpisodeMapper} from "~/src/core/episode/adapters/mappers/EpisodeMapper";
import {PodcastMapper} from "~/src/core/podcast/adapters/mappers/PodcastMapper";
import {PodcastRepositoryImpl} from "~/src/core/podcast/adapters/repositories/PodcastRepositoryImpl";
import {GetPodcastsUseCase} from "~/src/core/podcast/actions/GetPodcastsUseCase";
import type {Episode} from "~/src/core/episode/domain/entities/Episode";
import type {Podcast} from "~/src/core/podcast/domain/entities/Podcast";

const apiClient = new ApiClientImpl('https://itunes.apple.com')
const mapper = new EpisodeMapper()
const repository = new EpisodeRepositoryImpl(apiClient, mapper)
const useCase: GetEpisodesUseCase = new GetEpisodesUseCase(repository)

const pMapper = new PodcastMapper()
const pRepository = new PodcastRepositoryImpl(apiClient, pMapper)
const pUseCase = new GetPodcastsUseCase(pRepository)
onMounted(async () => {
  const pData: Podcast[] = await pUseCase.execute()
  const data: Episode[] = await useCase.execute(pData[0].id)
  console.log(pData[0])
  console.log(data)
  pData[0].setEpisodes = data
  console.log(pData[0])
})
</script>
<template>
  <div>
  </div>
</template>
