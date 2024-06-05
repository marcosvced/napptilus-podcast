import type {PodcastRepository} from '~/src/core/podcast/domain/ports/PodcastRepository'
import type {Podcast} from '~/src/core/podcast/domain/entities/Podcast'
import type {Mapper} from '~/src/core/common/adapters/mappers/Mapper'
import type {ApiClient} from '~/src/core/common/adapters/ApiClient'
import type {TopPodcastsDto} from '~/src/core/podcast/adapters/dtos/TopPodcastsDto'
import type {ApiResponse} from '~/src/core/common/domain/entities/ApiResponse'

export class PodcastRepositoryImpl implements PodcastRepository {
    constructor(
        private readonly apiClient: ApiClient,
        private readonly mapper: Mapper,
    ) {
    }


    async getPodcasts(limit: number): Promise<Podcast[]> {
        const url = `/us/rss/toppodcasts/limit=${limit}/genre=1310/json`
        const {data:{feed:{entry}}}: ApiResponse<TopPodcastsDto> = await this.apiClient.get<TopPodcastsDto>({url})
        return this.mapper.toDomainList(entry)
    }

}