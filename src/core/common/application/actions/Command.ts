export interface Command<T> {
    execute(args?: any): Promise<T>
}