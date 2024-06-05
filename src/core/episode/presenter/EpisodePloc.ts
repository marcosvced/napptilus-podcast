import {Ploc} from '~/src/core/common/presenters/Ploc'
import type {Episode} from '~/src/core/episode/domain/entities/Episode'
import type {GetEpisodesUseCase} from '~/src/core/episode/application/actions/GetEpisodesUseCase'
import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'

export class EpisodePloc extends Ploc<Episode[]> {
    constructor(
        private readonly getEpisodesUseCase: GetEpisodesUseCase
    ) {
        super()
    }

    async getEpisodes(id: PodcastId) {
        const data = await this.getEpisodesUseCase.execute(id)
        this.updateState(data)
    }

    get length() {
        return this.state.length
    }
}