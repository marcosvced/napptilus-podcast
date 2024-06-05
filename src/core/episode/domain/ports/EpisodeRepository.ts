import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'

export interface EpisodeRepository {
    getEpisodes(id: PodcastId): Promise<Episodes[]>
}