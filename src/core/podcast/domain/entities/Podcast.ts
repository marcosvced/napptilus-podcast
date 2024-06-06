import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'
import {Media} from '~/src/core/common/domain/entities/Media'
import {Model} from '~/src/core/common/domain/entities/Model'

export interface PodcastModel {
    id: PodcastId
    img: Media
    title: string
    author: string
    summary: string
    episodes?: Episode[]
}

export class Podcast extends Model implements PodcastModel {
    author: string
    summary: string
    episodes: Episode[]
    id: PodcastId
    img: Media
    title: string

    constructor({id, author, episodes, img, title, summary}: PodcastModel) {
        super()
        this.id = id
        this.author = author
        this.episodes = episodes ?? []
        this.img = img
        this.title = title
        this.summary = summary
    }


}