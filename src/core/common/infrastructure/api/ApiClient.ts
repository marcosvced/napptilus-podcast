import type {ApiResponse} from '~/src/core/common/domain/entities/ApiResponse'

export interface ApiClientOptions {
    params: object
    query: object
    body: object
}

export interface ApiClient {
    get<T>(url: string, options?: Pick<ApiClientOptions, 'params' | 'query'>): Promise<ApiResponse<T>>

    post<T>(url: string, options?: Pick<ApiClientOptions, 'params' | 'body'>): Promise<ApiResponse<T>>

    update<T>(url: string, options?: Pick<ApiClientOptions, 'params' | 'body'>): Promise<ApiResponse<T>>

    delete<T>(url: string, options?: Pick<ApiClientOptions, 'params'>): Promise<ApiResponse<T>>
}