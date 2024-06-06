import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Mapper} from '~/src/core/common/infrastructure/mappers/Mapper'
import type {ApiClient} from '~/src/core/common/infrastructure/api/ApiClient'
import type {ApiResponse} from '~/src/core/common/domain/entities/ApiResponse'
import type {EpisodeRepository} from '~/src/core/episode/domain/ports/EpisodeRepository'
import type {EpisodeResultsDto} from '~/src/core/episode/infrastructure/dtos/EpisodeResultsDto'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'
import type {EpisodeDto} from '~/src/core/episode/infrastructure/dtos/EpisodeDto'

export class EpisodeRepositoryImpl implements EpisodeRepository {
    constructor(
        private readonly apiClient: ApiClient,
        private readonly mapper: Pick<Mapper<Episode, EpisodeDto>, 'toDomainList'>,
    ) {
    }

    async getEpisodes(id: PodcastId): Promise<Episode[]> {
        const {data: {results}}: ApiResponse<EpisodeResultsDto> = await this.apiClient.get<EpisodeResultsDto>('/episodes', {
            query: {
                id,
                limit: 20
            }
        })
        results.shift()
        return this.mapper.toDomainList(results)
    }

}