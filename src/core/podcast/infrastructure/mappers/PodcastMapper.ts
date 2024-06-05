import type {Mapper} from '~/src/core/common/infrastructure/mappers/Mapper'
import type {PodcastModule} from '~/src/core/podcast/domain/entities/Podcast'
import type {PodcastDto} from '~/src/core/podcast/infrastructure/dtos/PodcastDto'
import {Podcast} from '~/src/core/podcast/domain/entities/Podcast'
import type {MediaDto} from '~/src/core/common/infrastructure/dtos/MediaDto'
import {Media} from '~/src/core/common/domain/entities/Media'
import {compact} from '~/src/core/common/helpers/compact'

export class PodcastMapper implements Pick<Mapper<PodcastModule, PodcastDto>, 'toDomain' | 'toDomainList'> {
    toDomain(dto: PodcastDto): PodcastModule {
        const {
            id: {attributes: {'im:id': podcastId}},
            title: {label: podcastTitle},
            summary: {label: podcastSummary},
            'im:artist': {label: author},
            'im:image': images
        } = dto

        const imgList = compact(images.map((img: MediaDto) => {
            if ('55' !== img.attributes.height) {
                return img.label
            }
        }))

        const img = new Media({url: {x1: imgList[0], x2: imgList[1]}})

        return new Podcast({
            id: podcastId,
            author,
            img,
            title: podcastTitle,
            summary: podcastSummary,
            episodes: [],
        })
    }

    toDomainList(dtos: PodcastDto[]): Podcast[] {
        return dtos.map((dto: PodcastDto) => this.toDomain(dto))
    }

}