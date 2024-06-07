import type {PodcastService} from '~/src/core/podcast/application/services/PodcastService'
import {Podcast} from '~/src/core/podcast/domain/entities/Podcast'
import type {PodcastRepository} from '~/src/core/podcast/domain/ports/PodcastRepository'
import {Storage} from '~/src/core/common/infrastructure/storage/Storage'
import {checkIfDataExpired} from '~/src/core/common/helpers/checkIfDataExpired'


export class PodcastServiceImpl implements PodcastService {
    constructor(private readonly repository: PodcastRepository) {
    }

    async getPodcasts(limit?: number): Promise<Podcast[]> {
        if ('undefined' !== typeof window) {
            const storage = new Storage({storeName: 'podcast'})
            const internalData = await checkIfDataExpired(storage)
            if (internalData) {
                return Promise.resolve(internalData.value.map((item) => new Podcast({...item as Podcast})))
            }
            const data = await this._fetchPodcasts(limit)
            await storage.insert({
                key: 'podcast',
                value: data,
                expiry: new Date().getTime() + 24 * 60 * 60 * 1000
            })
            return Promise.resolve(data)
        }
        return this._fetchPodcasts(limit)
    }

    private async _fetchPodcasts(limit?: number): Promise<Podcast[]> {
        return this.repository.getPodcasts(limit)
    }
}