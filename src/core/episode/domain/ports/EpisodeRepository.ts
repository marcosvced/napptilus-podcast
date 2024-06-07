import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'

export interface EpisodeRepository {
    getEpisodes(id: PodcastId): Promise<Episode[]>
}