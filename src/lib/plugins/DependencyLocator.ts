import {Container, Dependencies} from '~/src/core/common/infrastructure/di/Container'
import {ApiClientImpl} from '~/src/core/common/infrastructure/api/ApiClientImpl'
import {provideGetEpisodesUseCase} from '~/src/core/episode/infrastructure/di'
import {provideGetPodcastUseCase} from '~/src/core/podcast/infrastructure/di'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const container = Container.instance
    const apiClient = new ApiClientImpl(config.public.API_BASE_URL)
    container.bind(Dependencies.API_CLIENT, apiClient)

    provideGetPodcastUseCase()
    provideGetEpisodesUseCase()

    return {
        provide: {
            container: container
        }
    }

})