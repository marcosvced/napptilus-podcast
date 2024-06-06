export function compact(arr: any[]):any[] {
    return arr.filter((item) => !!item)
}