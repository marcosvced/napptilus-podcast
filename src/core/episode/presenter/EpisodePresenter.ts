import {defineStore} from 'pinia'
import {Dependencies} from '~/src/core/common/infrastructure/di/Container'
import type {GetEpisodesUseCase} from '~/src/core/episode/application/actions/GetEpisodesUseCase'
import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {EpisodeId} from '~/src/core/episode/domain/entities/EpisodeId'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'
import {UndefinedException, UnexpectedException} from '~/src/core/common/domain/entities/DataException'
import {podcastPresenter} from '~/src/core/podcast/presenters/PodcastPresenter'

export const episodePresenter = defineStore('episodes', () => {
    const {$container} = useNuxtApp()
    const useCase = $container.get<GetEpisodesUseCase>(Dependencies.GET_EPISODES)
    const state = ref()

    const podcastStore = podcastPresenter()

    async function getEpisodes(id: PodcastId) {

        // podcastStore.getPodcast(id)
        try {
            state.value = null
            state.value = await useCase.execute(id)
        } catch (e) {
            throw UnexpectedException()
        }
    }

    function getEpisode(id: EpisodeId) {
        const episode = state.value?.find((episode: Episode) => episode.id === id)
        if (!episode) {
            throw  UndefinedException('ID')
        }
        return episode
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