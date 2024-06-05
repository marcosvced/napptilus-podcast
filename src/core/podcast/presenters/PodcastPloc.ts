import {Ploc} from '~/src/core/common/presenters/Ploc'
import type {GetPodcastsUseCase} from '~/src/core/podcast/application/actions/GetPodcastsUseCase'
import type {Podcast} from '~/src/core/podcast/domain/entities/Podcast'

export class PodcastPloc extends Ploc<Podcast[]> {
    constructor(private readonly getPodcastsUseCase: GetPodcastsUseCase) {
        super()
    }

    async getPodcasts() {
        const data = await this.getPodcastsUseCase.execute()
        this.updateState(data)
    }
}