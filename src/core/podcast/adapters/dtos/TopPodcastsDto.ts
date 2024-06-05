import type {PodcastDto} from '~/src/core/podcast/adapters/dtos/PodcastDto'

export type TopPodcastsDto = {
    feed: {
        entry: PodcastDto[]
    }
}