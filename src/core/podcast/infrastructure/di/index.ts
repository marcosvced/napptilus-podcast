import type {ApiClient} from '~/src/core/common/infrastructure/api/ApiClient'
import {PodcastMapper} from '~/src/core/podcast/infrastructure/mappers/PodcastMapper'
import {PodcastRepositoryImpl} from '~/src/core/podcast/infrastructure/repositories/PodcastRepositoryImpl'
import {PodcastServiceImpl} from '~/src/core/podcast/application/services/PodcastServiceImpl'
import {GetPodcastsUseCase} from '~/src/core/podcast/application/actions/GetPodcastsUseCase'
import {Container, Dependencies} from '~/src/core/common/infrastructure/di/Container'

export const provideGetPodcastUseCase = () => {
    const apiClient = Container.instance.get<ApiClient>(Dependencies.API_CLIENT)
    const mapper = new PodcastMapper()
    const repository = new PodcastRepositoryImpl(apiClient, mapper)
    const service = new PodcastServiceImpl(repository)
    Container.instance.bind(Dependencies.GET_PODCASTS, new GetPodcastsUseCase(service))
}

