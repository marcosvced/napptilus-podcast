import type {EpisodeDto} from '~/src/core/episode/infrastructure/dtos/EpisodeDto'

export type EpisodeResultsDto = {
    resultCount: number,
    results: EpisodeDto[]
}