import {defineStore} from 'pinia'
import {Dependencies} from '~/src/core/common/infrastructure/di/Container'
import type {GetPodcastsUseCase} from '~/src/core/podcast/application/actions/GetPodcastsUseCase'
import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Podcast} from '~/src/core/podcast/domain/entities/Podcast'

export const podcastPresenter = defineStore('podcasts', () => {
    const {$container} = useNuxtApp()
    const useCase = $container.get<GetPodcastsUseCase>(Dependencies.GET_PODCASTS)
    const state = ref()

    async function getPodcasts() {
        state.value = await useCase.execute()
    }

    function getPodcast(id: PodcastId) {
        return state.value.find((podcast: Podcast) => podcast.id === id)
    }


    return {
        state,
        getPodcasts,
        getPodcast,
    }

})