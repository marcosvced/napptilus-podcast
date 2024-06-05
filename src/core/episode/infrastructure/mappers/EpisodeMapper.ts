import type {Mapper} from '~/src/core/common/infrastructure/mappers/Mapper'
import {Episode} from '~/src/core/episode/domain/entities/Episode'
import type {EpisodeDto} from '~/src/core/episode/infrastructure/dtos/EpisodeDto'

export class EpisodeMapper implements Pick<Mapper<Episode, EpisodeDto>, 'toDomain' | 'toDomainList'> {
    toDomain(dto: EpisodeDto): Episode {
        const {
            trackId: id,
            trackName: title,
            trackTimeMillis: duration,
            description,
            episodeUrl: url,
            releaseDate
        } = dto


        return new Episode({
            id,
            title,
            duration,
            description,
            url,
            date: new Date(releaseDate)
        })
    }

    toDomainList(dtos: EpisodeDto[]): Episode[] {
        return dtos.map((dto:EpisodeDto) => this.toDomain(dto))
    }

}