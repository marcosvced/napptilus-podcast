import type {EpisodeDto} from '~/src/core/episode/adapters/dtos/EpisodeDto'

export type EpisodeResultsDto = {
    resultCount: number,
    results: EpisodeDto[]
}