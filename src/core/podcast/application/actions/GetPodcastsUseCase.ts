import type {Command} from '~/src/core/common/application/actions/Command'
import {Podcast} from '~/src/core/podcast/domain/entities/Podcast'
import type {PodcastService} from '~/src/core/podcast/application/services/PodcastService'

export class GetPodcastsUseCase implements Command<Podcast[]> {
    constructor(private readonly service: PodcastService) {
    }
    execute(limit?: number): Promise<Podcast[]> {
        return this.service.getPodcasts(limit ?? 100)
    }
}