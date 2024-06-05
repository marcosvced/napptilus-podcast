type MediaUrl = {
    x1: string
    x2: string
}

interface MediaModule {
    url: MediaUrl
}

export class Media implements MediaModule {
    url: MediaUrl
    constructor({ url }: MediaModule) {
        this.url = url
    }
}