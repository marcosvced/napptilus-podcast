import {defineStore} from 'pinia'
import {Dependencies} from '~/src/core/common/infrastructure/di/Container'
import type {GetEpisodesUseCase} from '~/src/core/episode/application/actions/GetEpisodesUseCase'
import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {EpisodeId} from '~/src/core/episode/domain/entities/EpisodeId'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'

export const episodePresenter = defineStore('episodes', () => {
    const {$container} = useNuxtApp()
    const useCase = $container.get<GetEpisodesUseCase>(Dependencies.GET_EPISODES)
    const state = ref()

    async function getEpisodes(id: PodcastId) {
        state.value = await useCase.execute(id)
    }

    function getEpisode(id: EpisodeId) {
        return state.value?.find((episode: Episode) => episode.id === id)
    }

    function getLength() {
        return state.value.length
    }

    return {
        state,
        getEpisodes,
        getEpisode,
        getLength
    }

})