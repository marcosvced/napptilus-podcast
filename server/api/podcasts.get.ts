export default defineEventHandler(async (evt) => {
    const {public:{PODCAST_BASE_URL}} = useRuntimeConfig(evt)
    const { limit} = getQuery(evt)
    const url = `${PODCAST_BASE_URL}/us/rss/toppodcasts/limit=${limit}/genre=1310/json`
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json()
})