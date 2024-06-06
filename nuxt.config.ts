// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    plugins: [
        {src: '~/src/plugins/DependencyLocator.ts'},
        {src: '~/src/plugins/Serializer.ts'},
    ],
    pages: true,
    dir: {
        pages: './src/pages',
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
            PODCAST_BASE_URL: process.env.PODCAST_BASE_URL
        }
    },
    modules: [
        '@pinia/nuxt',
    ],
    experimental: {
        renderJsonPayloads: true
    }
})
