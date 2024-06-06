import {Model} from '~/src/core/common/domain/entities/Model'

type MediaUrl = {
    x1: string
    x2: string
}

interface MediaModel {
    url: MediaUrl
}

export class Media extends Model implements MediaModel {
    url: MediaUrl
    constructor({ url }: MediaModel) {
        super()
        this.url = url
    }
}