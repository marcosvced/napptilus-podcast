export default defineEventHandler(async (evt) => {
    const {public:{PODCAST_BASE_URL}} = useRuntimeConfig(evt)
    const {id, limit} = getQuery(evt)

    const url = new URL(`${PODCAST_BASE_URL}/lookup`)
    url.searchParams.set('id', id as string)
    url.searchParams.set('media', 'podcast')
    url.searchParams.set('entity', 'podcastEpisode')
    url.searchParams.set('limit', limit as string)
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json()
})