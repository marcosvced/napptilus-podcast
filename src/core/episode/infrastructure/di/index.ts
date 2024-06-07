import {EpisodeMapper} from '~/src/core/episode/infrastructure/mappers/EpisodeMapper'
import {EpisodeRepositoryImpl} from '~/src/core/episode/infrastructure/repositories/EpisodeRepositoryImpl'
import {GetEpisodesUseCase} from '~/src/core/episode/application/actions/GetEpisodesUseCase'
import type {ApiClient} from '~/src/core/common/infrastructure/api/ApiClient'
import {Container, Dependencies} from '~/src/core/common/infrastructure/di/Container'
import {EpisodeServiceImpl} from '~/src/core/episode/application/services/EpisodeServiceImpl'

export const provideGetEpisodesUseCase = () => {
    const apiClient = Container.instance.get<ApiClient>(Dependencies.API_CLIENT)
    const mapper = new EpisodeMapper()
    const repository = new EpisodeRepositoryImpl(apiClient, mapper)
    const service = new EpisodeServiceImpl(repository)
    Container.instance.bind(Dependencies.GET_EPISODES,new GetEpisodesUseCase(service))

}

