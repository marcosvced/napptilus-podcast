export interface DBConfig {
    dbName: string;
    dbVersion: number;
    storeName: string;
}

export class IndexDB {
    private db: IDBDatabase | null = null
    private readonly dbConfig: DBConfig

    constructor(config: DBConfig) {
        this.dbConfig = config
    }

    open(): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbConfig.dbName, this.dbConfig.dbVersion)

            request.onerror = () => {
                reject(request.error)
            }

            request.onsuccess = () => {
                this.db = request.result
                resolve()
            }

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result
                if (!db.objectStoreNames.contains(this.dbConfig.storeName)) {
                    db.createObjectStore(this.dbConfig.storeName, {keyPath: 'id', autoIncrement: true})
                }
            }
        })
    }

    close(): void {
        if (this.db) {
            this.db.close()
            this.db = null
        }
    }

    drop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('No database connection.'))
                return
            }

            const request = indexedDB.deleteDatabase(this.dbConfig.dbName)

            request.onerror = () => {
                reject(request.error)
            }

            request.onsuccess = () => {
                resolve()
            }
        })
    }

    insert(data: object): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('No database connection.'))
                return
            }

            const transaction = this.db.transaction(this.dbConfig.storeName, 'readwrite')
            const store = transaction.objectStore(this.dbConfig.storeName)

            const request = store.add(data)

            request.onerror = () => {
                reject(request.error)
            }

            request.onsuccess = () => {
                resolve()
            }
        })
    }

    select(): Promise<object[]> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('No database connection.'))
                return
            }

            const transaction = this.db.transaction(this.dbConfig.storeName, 'readonly')
            const store = transaction.objectStore(this.dbConfig.storeName)
            const request = store.getAll()

            request.onerror = () => {
                reject(request.error)
            }

            request.onsuccess = () => {
                resolve(request.result)
            }
        })
    }
}