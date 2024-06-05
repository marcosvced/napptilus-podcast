import type {EpisodeId} from '~/src/core/episode/domain/entities/EpisodeId'

export interface EpisodeModule {
    id: EpisodeId
    title: string
    date: Date
    duration: number
    description: string
    url: string
}

export class Episode implements EpisodeModule {
    date: Date
    description: string
    duration: number
    id: EpisodeId
    title: string
    url: string

    constructor({date, description, duration, id, title, url}: EpisodeModule) {
        this.date = date
        this.description = description
        this.duration = duration
        this.id = id
        this.title = title
        this.url = url
    }
}