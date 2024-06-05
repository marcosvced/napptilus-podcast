import type {ApiClient, ApiClientOptions} from '~/src/core/common/adapters/api/ApiClient'
import type {ApiResponse} from '~/src/core/common/domain/entities/ApiResponse'
import {ofetch} from 'ofetch'
import {ResponseStatus} from '~/src/core/common/domain/entities/ResponseStatus'

export class ApiClientImpl implements ApiClient {

    constructor(private readonly baseUrl: string) {
    }


    async get<T>(url: string, options?: Pick<ApiClientOptions, 'params' | 'query'>): Promise<ApiResponse<T>> {
        return this._doFetch(url, options)
    }

    async delete<T>(url: string, options?: Pick<ApiClientOptions, 'params'>): Promise<ApiResponse<T>> {
        return this._doFetch(url, {
            method: 'DELETE',
            ...options
        })
    }

    async post<T>(url: string, options?: Pick<ApiClientOptions, 'params' | 'body'>): Promise<ApiResponse<T>> {
        return this._doFetch(url, {
            method: 'POST',
            ...options
        })
    }

    async update<T>(url: string, options?: Pick<ApiClientOptions, 'params' | 'body'>): Promise<ApiResponse<T>> {
        return this._doFetch(url, {
            method: 'PUT',
            ...options
        })
    }

    private async _doFetch<T>(url: string, options = {}): Promise<ApiResponse<T>> {
        const baseURL = this.baseUrl
        let status: ResponseStatus = ResponseStatus.BAD
        const data = await ofetch(url, {
            baseURL,
            parseResponse: JSON.parse,
            onRequest({response}) {
                status = response?.status ?? ResponseStatus.BAD
            },
            ...options,
        })
        return {
            data,
            status
        }
    }
}
