import type {MediaDto} from '~/src/core/common/infrastructure/dtos/MediaDto'

export type PodcastDto = {
    id: { attributes: { 'im:id': string } }
    'im:name': { label: string }
    'im:image': MediaDto[]
    'im:artist': { label: string }
    summary: { label: string }
}