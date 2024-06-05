import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Mapper} from '~/src/core/common/adapters/mappers/Mapper'
import type {ApiClient} from '~/src/core/common/adapters/api/ApiClient'
import type {ApiResponse} from '~/src/core/common/domain/entities/ApiResponse'
import type {EpisodeRepository} from '~/src/core/episode/domain/ports/EpisodeRepository'
import type {EpisodeResultsDto} from '~/src/core/episode/adapters/dtos/EpisodeResultsDto'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'
import type {EpisodeDto} from '~/src/core/episode/adapters/dtos/EpisodeDto'

export class EpisodeRepositoryImpl implements EpisodeRepository {
    constructor(
        private readonly apiClient: ApiClient,
        private readonly mapper: Mapper<Episode, EpisodeDto>,
    ) {
    }

    async getEpisodes(id: PodcastId): Promise<Episode[]> {
        // https://itunes.apple.com/lookup?id=1535809341&media=podcast&entity=podcastEpisode&limit=20
        const {data: {results}}: ApiResponse<EpisodeResultsDto> = await this.apiClient.get<EpisodeResultsDto>('/lookup', {
            params:{},
            query: {
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