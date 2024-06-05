import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Mapper} from '~/src/core/common/adapters/mappers/Mapper'
import type {ApiClient} from '~/src/core/common/adapters/ApiClient'
import type {ApiResponse} from '~/src/core/common/domain/entities/ApiResponse'
import type {EpisodeRepository} from '~/src/core/episode/domain/ports/EpisodeRepository'
import type {EpisodeResultsDto} from '~/src/core/episode/adapters/dtos/EpisodeResultsDto'

export class EpisodeRepositoryImpl implements EpisodeRepository {
    constructor(
        private readonly apiClient: ApiClient,
        private readonly mapper: Mapper,
    ) {
    }

    async getEpisodes(id: PodcastId): Promise<Episodes[]> {
        // https://itunes.apple.com/lookup?id=1535809341&media=podcast&entity=podcastEpisode&limit=20
        const {data:{results}}: ApiResponse<EpisodeResultsDto> = await this.apiClient.get<EpisodeResultsDto>({
            url: '/lookup',
            params: {
                id,
                media: 'podcast',
                entity: 'podcastEpisode',
                limit: 20
            }
        })
        results.shift()
        return this.mapper.toDomainList(results)
    }

}