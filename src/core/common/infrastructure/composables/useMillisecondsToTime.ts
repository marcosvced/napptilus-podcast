import {compact} from '~/src/core/common/helpers/compact'

export const useMillisecondsToTime = (ms: number, options?: {
    format: 'HH:MM:SS' | 'HH:MM'
}) => {
    const date = new Date(ms)
    const format = (options?.format ?? 'HH:MM:SS').split(':')
    const time = format.map((split) => {
        if ('HH' === split) {
            return date.getUTCHours().toString().padStart(2, '0')
        }
        if ('MM' === split) {
            return date.getUTCMinutes().toString().padStart(2, '0')
        }
        if ('SS' === split) {
            return date.getUTCSeconds().toString().padStart(2, '0')
        }

    })
    return compact(time).join(':')
}