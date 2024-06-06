import type {EpisodeId} from '~/src/core/episode/domain/entities/EpisodeId'
import {Model} from '~/src/core/common/domain/entities/Model'

export interface EpisodeModel {
    id: EpisodeId
    title: string
    date: Date
    duration: number
    description: string
    url: string
}

export class Episode extends Model implements EpisodeModel {
    date: Date
    description: string
    duration: number
    id: EpisodeId
    title: string
    url: string

    constructor({date, description, duration, id, title, url}: EpisodeModel) {
        super()
        this.date = date
        this.description = description
        this.duration = duration
        this.id = id
        this.title = title
        this.url = url
    }
}