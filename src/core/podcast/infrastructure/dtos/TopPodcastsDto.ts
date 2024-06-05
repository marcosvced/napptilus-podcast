import type {PodcastDto} from '~/src/core/podcast/infrastructure/dtos/PodcastDto'

export type TopPodcastsDto = {
    feed: {
        entry: PodcastDto[]
    }
}