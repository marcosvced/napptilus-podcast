import type {Podcast} from '~/src/core/podcast/domain/entities/Podcast'

export interface PodcastRepository {
    getPodcasts(limit?:number): Promise<Podcast[]>
}