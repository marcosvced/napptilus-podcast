import {definePreset} from 'unocss'
import {breakpoints} from './_settings/breakpoints'
import {colors} from './_settings/palette'
import {mediaQuery} from './_tools/media'
import {margins, paddings} from './_trumps/spacing'
import {width, height} from './_trumps/size'
import {grid} from './_trumps/grid'
import {depth} from './_trumps/elevation'


export default definePreset(() => {
    return {
        name: 'AguiaDesign',
        theme: {
            breakpoints,
            colors
        },
        variants: [
            mediaQuery,
        ],
        rules: [
            depth,
            margins,
            paddings,
            width,
            height,
            ...grid
        ]
    }
})