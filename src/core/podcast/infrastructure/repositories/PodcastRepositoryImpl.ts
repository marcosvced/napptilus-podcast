import type {PodcastRepository} from '~/src/core/podcast/domain/ports/PodcastRepository'
import type {Podcast} from '~/src/core/podcast/domain/entities/Podcast'
import type {Mapper} from '~/src/core/common/infrastructure/mappers/Mapper'
import type {ApiClient} from '~/src/core/common/infrastructure/api/ApiClient'
import type {TopPodcastsDto} from '~/src/core/podcast/infrastructure/dtos/TopPodcastsDto'
import type {ApiResponse} from '~/src/core/common/domain/entities/ApiResponse'
import type {PodcastDto} from '~/src/core/podcast/infrastructure/dtos/PodcastDto'

export class PodcastRepositoryImpl implements PodcastRepository {
    constructor(
        private readonly apiClient: ApiClient,
        private readonly mapper: Pick<Mapper<Podcast, PodcastDto>, 'toDomainList'>,
    ) {
    }


    async getPodcasts(limit: number): Promise<Podcast[]> {
        const {data: {feed: {entry}}}: ApiResponse<TopPodcastsDto> = await this.apiClient.get<TopPodcastsDto>('/podcasts', {query: {limit}})
        return this.mapper.toDomainList(entry)
    }

}