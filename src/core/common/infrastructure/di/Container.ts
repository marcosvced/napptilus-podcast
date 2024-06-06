export enum Dependencies {
    GET_EPISODES = 'GetEpisodesUseCase',
    GET_PODCASTS = 'GetPodcastsUseCase',
    API_CLIENT = 'APIClient'
}

export class Container {
    private readonly dependencies: Map<Dependencies, object> = new Map<Dependencies, object>()
    private static _instance: Container

    private constructor() {
    }


    static get instance(): Container {
        if (!Container._instance) {
            Container._instance = new Container()
        }
        return Container._instance
    }

    public bind(key: Dependencies, value: object) {
        if (this.dependencies.has(key)) {
            return
        }
        this.dependencies.set(key, value)
    }

    get<T>(key: Dependencies): T {
        return this.dependencies.get(key) as T
    }
}
