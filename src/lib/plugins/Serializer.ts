export default definePayloadPlugin(() => {
    definePayloadReducer('JSONParse', data => data && 'object' === typeof data && 'toJSON' in data && JSON.stringify(data.toJSON()))
    definePayloadReviver('JSONParse', data => JSON.parse(data))
})