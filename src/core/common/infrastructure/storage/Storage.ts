import {type RemovableRef} from '@vueuse/core'
import {JS} from 'refa'

export interface DBConfig {
    storeName: string;
}

export class Storage {
    private readonly dbConfig: DBConfig
    private storage: RemovableRef<any> = ref(null)

    constructor(config: DBConfig) {
        this.dbConfig = config
    }

    drop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.dbConfig.storeName) {
                reject(new Error('No storage name provided.'))
                return
            }

            try {
                localStorage.removeItem(this.dbConfig.storeName)
                resolve()
            } catch (err) {
                reject(err)

            }
        })
    }

    insert(data: object): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.dbConfig.storeName) {
                reject(new Error('No storage name provided.'))
                return
            }

            try {
                localStorage.setItem(this.dbConfig.storeName, JSON.stringify(data))
                resolve()
            } catch (err) {
                reject(err)
            }
        })
    }

    select(): Promise<object> {
        return new Promise((resolve, reject) => {
            if (!this.dbConfig.storeName) {
                reject(new Error('No storage name provided.'))
                return
            }
            try {
                const result = localStorage.getItem(this.dbConfig.storeName)
                resolve(result ? JSON.parse(result) : undefined)
            } catch (err) {
                reject(err)
            }
        })
    }
}