import type {Episode} from '~/src/core/episode/domain/entities/Episode'
import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'

export interface EpisodeService {
    getEpisodes(id:PodcastId): Promise<Episode[]>
}