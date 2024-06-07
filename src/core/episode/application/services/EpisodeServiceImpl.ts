import {Storage} from '~/src/core/common/infrastructure/storage/Storage'
import type {EpisodeService} from '~/src/core/episode/application/services/EpisodeService'
import type {EpisodeRepository} from '~/src/core/episode/domain/ports/EpisodeRepository'
import type {PodcastId} from '~/src/core/podcast/domain/entities/PodcastId'
import {Episode} from '~/src/core/episode/domain/entities/Episode'
import {checkIfDataExpired} from '~/src/core/common/helpers/checkIfDataExpired'


export class EpisodeServiceImpl implements EpisodeService {
    constructor(private readonly repository: EpisodeRepository) {
    }

    async getEpisodes(id: PodcastId): Promise<Episode[]> {
        if ('undefined' !== typeof window) {
            const storage = new Storage({storeName: id})
            const internalData = await checkIfDataExpired(storage)
            if (internalData) {
                return Promise.resolve(internalData.value.map((item) => new Episode({...item as Episode})))
            }
            const data = await this._fetchEpisodes(id)
            await storage.insert({
                key: 'episode',
                value: data,
                expiry: new Date().getTime() + 24 * 60 * 60 * 1000
            })
            return Promise.resolve(data)
        }

        return this._fetchEpisodes(id)
    }


    private async _fetchEpisodes(id: PodcastId): Promise<Episode[]> {
        return this.repository.getEpisodes(id)
    }
}