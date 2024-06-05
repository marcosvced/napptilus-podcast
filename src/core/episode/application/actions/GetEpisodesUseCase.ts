import {Command} from '~/src/core/common/application/actions/Command'
import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'
import type {EpisodeRepository} from '~/src/core/episode/domain/ports/EpisodeRepository'

export class GetEpisodesUseCase implements Command<Episode[]> {
    constructor(private readonly repository: EpisodeRepository) {
    }

    execute(id: PodcastId): Promise<Episode[]> {
        return this.repository.getEpisodes(id)
    }
}