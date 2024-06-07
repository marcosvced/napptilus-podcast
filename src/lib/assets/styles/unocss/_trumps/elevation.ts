export const depth = [
    new RegExp('^(?:-)?depth\\((100|200|300|400)\\)$'),
    ([, n]: [never, number]) => {
        // if (isNaN(n) || 4 * 100 < n) {
        //     return
        // }
        const index = n / 100
        const shadow = {
            x: 0,
            y: 4 === index ? 12 * index : 4 * index,
            blur: [4, 6, 20, 60][index - 1],
            spread: 0,
            color: `rgba(0,0,0, .${[2, 2, 4, 8][index - 1]})`
        }

        return {
            'box-shadow': `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
        }
    },
    {layer: 'trumps'}
]