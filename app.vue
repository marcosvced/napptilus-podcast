<script setup lang="ts">

import {ApiClientImpl} from '~/src/core/common/infrastructure/api/ApiClientImpl'
import {EpisodeMapper} from '~/src/core/episode/infrastructure/mappers/EpisodeMapper'
import {EpisodeRepositoryImpl} from '~/src/core/episode/infrastructure/repositories/EpisodeRepositoryImpl'
import {GetEpisodesUseCase} from '~/src/core/episode/application/actions/GetEpisodesUseCase'
import {PodcastMapper} from '~/src/core/podcast/infrastructure/mappers/PodcastMapper'
import {PodcastRepositoryImpl} from '~/src/core/podcast/infrastructure/repositories/PodcastRepositoryImpl'
import {GetPodcastsUseCase} from '~/src/core/podcast/application/actions/GetPodcastsUseCase'
import {onMounted} from 'vue'
import {PodcastServiceImpl} from '~/src/core/podcast/application/services/PodcastServiceImpl'

const apiClient = new ApiClientImpl('https://itunes.apple.com')
const mapper = new EpisodeMapper()
const repository = new EpisodeRepositoryImpl(apiClient, mapper)
const useCase = new GetEpisodesUseCase(repository)

const pMapper = new PodcastMapper()
const pRepository = new PodcastRepositoryImpl(apiClient, pMapper)
const pService = new PodcastServiceImpl(pRepository)
const pUseCase = new GetPodcastsUseCase(pService)


onMounted(async () => {
  const pData = await pUseCase.execute()
  const data = await useCase.execute(pData[0].id)
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
