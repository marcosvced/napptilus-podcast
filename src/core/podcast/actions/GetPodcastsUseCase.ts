import type {Command} from '~/src/core/common/application/Command'
import {Podcast} from '~/src/core/podcast/domain/entities/Podcast'
import type {PodcastRepository} from '~/src/core/podcast/domain/ports/PodcastRepository'

export class GetPodcastsUseCase implements Command<Podcast[]> {
    constructor(private readonly repository: PodcastRepository) {
    }
    execute(limit?: number): Promise<Podcast[]> {
        return this.repository.getPodcasts(limit ?? 100)
    }
}