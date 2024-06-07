// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    plugins: [
        {src: '~/src/lib/plugins/DependencyLocator.ts'},
        {src: '~/src/lib/plugins/Serializer.ts'},
    ],
    css: [
      '~/src/lib/assets/styles/css/main.css'
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
    modules: ['@pinia/nuxt', '@unocss/nuxt', '@nuxt/image'],
    experimental: {
        renderJsonPayloads: true
    }
})