import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'
import {Media} from '~/src/core/common/domain/entities/Media'

export interface PodcastModule {
    id: PodcastId
    img: Media
    title: string
    author: string
    summary: string
    episodes?: Episode[]
}

export class Podcast implements PodcastModule {
    author: string
    summary: string
    episodes: Episode[]
    id: PodcastId
    img: Media
    title: string

    constructor({id, author, episodes, img, title, summary}: PodcastModule) {
        this.id = id
        this.author = author
        this.episodes = episodes ?? []
        this.img = img
        this.title = title
        this.summary = summary
    }


}