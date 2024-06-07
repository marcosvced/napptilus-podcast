import type {Storage} from '~/src/core/common/infrastructure/storage/Storage'

type InternalData = { key: string, value: object[], expiry: number }

export const checkIfDataExpired = async (storage: Storage): Promise<InternalData | null> => {
    const internalData: InternalData = await storage.select() as InternalData
    if (!!internalData && !isDataExpired(internalData)) {
        return internalData
    }
    await storage.drop()
    return null
}

function isDataExpired(data: InternalData) {
    const now = new Date()
    return now.getTime() > data?.expiry
}