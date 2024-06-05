import type {Podcast} from '~/src/core/podcast/domain/entities/Podcast'

export interface PodcastService {
    getPodcasts(limit?:number): Promise<Podcast[]>
}