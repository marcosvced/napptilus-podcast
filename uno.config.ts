import unocss from 'unocss/astro'

import {type ConfigBase, defineConfig} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import aguia from './src/lib/assets/styles/unocss/index'

export default defineConfig({
    integrations: [
        unocss({
            injectReset: true // or a path to the reset file
        }),
    ],
    transformers: [
        transformerDirectives({ enforce: 'pre' }),
    ],
    presets: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        aguia()
    ]
} as ConfigBase)