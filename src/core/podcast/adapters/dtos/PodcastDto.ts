import type {MediaDto} from '~/src/core/common/adapters/dtos/MediaDto'

export type PodcastDto = {
    id: { attributes: { 'im:id': string } }
    title: { label: string }
    'im:image': MediaDto[]
    'im:artist': { label: string }
    summary: { label: string }
}