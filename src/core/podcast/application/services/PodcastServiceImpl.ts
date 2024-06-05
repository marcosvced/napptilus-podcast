import type {PodcastService} from '~/src/core/podcast/application/services/PodcastService'
import  {Podcast} from '~/src/core/podcast/domain/entities/Podcast'
import type {PodcastRepository} from '~/src/core/podcast/domain/ports/PodcastRepository'
import {IndexDB} from '~/src/core/common/infrastructure/indexDB/IndexDB'

type InternalData = { key: string, value: object[], expiry: number }

export class PodcastServiceImpl implements PodcastService {
    constructor(private readonly repository: PodcastRepository) {
    }

    async getPodcasts(limit?: number): Promise<Podcast[]> {
        const indexDB = new IndexDB({dbName: 'podcasts', dbVersion: 1, storeName: 'podcast'})
        await indexDB.open()
        const internalData: InternalData[] = await indexDB.select() as InternalData[]

        if (internalData[0] && !this._isDataExpired(internalData[0])) {
            return Promise.resolve(internalData[0].value.map((item)=> new Podcast({...item as Podcast})))
        }
        const data = await this.repository.getPodcasts(limit)
        await indexDB.insert({
            key: 'podcast',
            value: data,
            expiry: new Date().getTime() + 24 * 60 * 60 * 1000
        })
        indexDB.close()
        return Promise.resolve(data)
    }

    private _isDataExpired(data: InternalData) {
        const now = new Date()
        return now.getTime() > data?.expiry
    }
}