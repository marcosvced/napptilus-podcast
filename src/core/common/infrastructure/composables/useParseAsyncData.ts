export const useParseAsyncData = (key: string, fn: () => Promise<unknown>) => {
    return useAsyncData(key, async () => {
        const response = await fn()
        return JSON.parse(JSON.stringify(response))
    })
}