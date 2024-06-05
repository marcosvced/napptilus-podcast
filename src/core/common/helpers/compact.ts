export function compact(arr: []) {
    return arr.filter((item) => !!item)
}