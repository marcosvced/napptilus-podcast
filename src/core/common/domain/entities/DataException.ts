export type DataException = {
    kind: string,
    error: Error
}

export enum GenericException {
    UNEXPECTED = 'UnexpectedException',
    UNDEFINED = 'UndefinedException',
}

export function UnexpectedException(): DataException {
    return {
        kind: GenericException.UNEXPECTED,
        error: new Error('🚨 Something went wrong.')
    }
}

export function UndefinedException(key: string): DataException {
    return {
        kind: GenericException.UNDEFINED,
        error: new Error(`🚨 The ${key} does not exist.`)
    }
}


