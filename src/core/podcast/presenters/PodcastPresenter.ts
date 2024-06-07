import {defineStore} from 'pinia'
import {Dependencies} from '~/src/core/common/infrastructure/di/Container'
import type {GetPodcastsUseCase} from '~/src/core/podcast/application/actions/GetPodcastsUseCase'
import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Podcast} from '~/src/core/podcast/domain/entities/Podcast'
import {UndefinedException, UnexpectedException} from '~/src/core/common/domain/entities/DataException'

export const podcastPresenter = defineStore('podcasts', () => {
    const {$container} = useNuxtApp()
    const useCase = $container.get<GetPodcastsUseCase>(Dependencies.GET_PODCASTS)
    const state = ref()

    async function getPodcasts() {
        try {
            state.value = null
            state.value = await useCase.execute()
        } catch (e) {
            throw UnexpectedException()
        }
    }

    function getPodcast(id: PodcastId) {

        const podcast = state.value?.find((podcast: Podcast) => podcast.id === id)
        if (!podcast) {
            throw UndefinedException('ID')
        }
        return podcast
    }


    return {
        state,
        getPodcasts,
        getPodcast,
    }

})