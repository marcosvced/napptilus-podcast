import type {Command} from '~/src/core/common/application/actions/Command'
import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'
import type {EpisodeService} from '~/src/core/episode/application/services/EpisodeService'

export class GetEpisodesUseCase implements Command<Episode[]> {
    constructor(private readonly service: EpisodeService) {
    }

    execute(id: PodcastId): Promise<Episode[]> {
        return this.service.getEpisodes(id)
    }
}