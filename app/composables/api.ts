import type { RouterMethod } from 'h3'
import type { AvailableRouterMethod as _AvailableRouterMethod, NitroFetchRequest } from 'nitropack/types'
import type { AsyncData, FetchResult, UseFetchOptions } from 'nuxt/app'

/**
 * Extract keys of `T` whose values are all of type string.
 *
 * NOTE: This is a fork for `KeysOf` type from `asyncData.d.ts` as it's not exported there.
 */
type KeysOf<T> = Array<T extends T ? keyof T extends string ? keyof T : never : never>
/**
 * Pick properties `K` from `T`.
 *
 * NOTE: This is a fork for `PickFrom` type from `asyncData.d.ts` as it's not exported there.
 */
type PickFrom<T, K extends Array<string>> = T extends Array<any> ? T : T extends Record<string, any> ? keyof T extends K[number] ? T : K[number] extends never ? T : Pick<T, K[number]> : T
/**
 * Extract string type from a given union type `T`.
 */
type ExtractString<T> = T extends string ? T : never

/**
 * Available router method for a given `NitroFetchRequest`.
 *
 * NOTE: This is a fork for `AvailableRouterMethod` type from `fetch.d.ts` as it's not exported there.
 */
type AvailableRouterMethod<R extends NitroFetchRequest> = _AvailableRouterMethod<R> | Uppercase<_AvailableRouterMethod<R>>
/**
 * All routes of `NitroFetchRequest`.
 */
type NitroFetchRequestRoutes = ExtractString<NitroFetchRequest>
/**
 * Map router method to its corresponding (internal) routes.
 *
 * @example
 * ```ts
 * type Example = MethodToRoutesMap<'get'>
 * // Expected: '/api/example' | '/api/another-example'
 * ```
 */
type MethodToRoutesMap<Method extends RouterMethod> = {
  [K in NitroFetchRequestRoutes]: Method extends AvailableRouterMethod<K> ? K : never
}[NitroFetchRequestRoutes]

/**
 * Use fetch with `$api` (the customized `ofetch` instance).
 *
 * TODO: Migrate to use factory functions after factory function support is added in Nuxt.
 *
 * @experimental
 * @param request Same as `request` parameter of `useFetch`
 * @param options Same as `opts` parameter of `useFetch`, `$fetch` option is omitted
 * @returns The async data result with types inferred from the request
 * @see https://nuxt.com/docs/4.x/api/composables/use-fetch
 * @see https://github.com/nuxt/nuxt/issues/14736
 */
export function useApi<
  ResT = void,
  ErrorT = Error,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  Method extends AvailableRouterMethod<ReqT> = AvailableRouterMethod<ReqT>,
  _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT,
  DataT = _ResT,
  PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
  DefaultT = null,
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  options?: Omit<UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, Method>, '$fetch'>,
): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | undefined> {
  return useFetch<ResT, ErrorT, ReqT, Method, _ResT, DataT, PickKeys, DefaultT>(request, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}

/**
 * `useApi` with `GET` method.
 *
 * Auto-completes only (internal) routes that support GET method.
 *
 * Use with caution for external routes as type inference won't work in that case.
 *
 * @experimental
 * @param request Same as `request` parameter of `useFetch`
 * @param params Query parameters to be sent with the GET request
 * @param options Same as `opts` parameter of `useFetch`, `$fetch`, `method` and `params` options are omitted
 * @returns The async data result with types inferred from the request
 * @see https://nuxt.com/docs/4.x/api/composables/use-fetch
 */
export function useApiGet<
  ResT = void,
  ErrorT = Error,
  ReqT extends MethodToRoutesMap<'get'> = MethodToRoutesMap<'get'>,
  Method extends AvailableRouterMethod<ReqT> = AvailableRouterMethod<ReqT>,
  _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT,
  DataT = _ResT,
  PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
  DefaultT = null,
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  params?: Record<string, any>,
  options?: Omit<UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, AvailableRouterMethod<ReqT>>, 'method' | 'params'>,
): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | undefined> {
  return useApi<ResT, ErrorT, ReqT, Method, _ResT, DataT, PickKeys, DefaultT>(
    request,
    {
      ...options,
      // @ts-expect-error: Method is secured.
      method: 'get',
      params,
    },
  )
}

/**
 * `useApi` with `POST` method.
 *
 * Auto-completes only routes that support POST method.
 *
 * Use with caution for external routes as type inference won't work in that case.
 *
 * @experimental
 * @param request Same as `request` parameter of `useFetch`
 * @param body Request body to be sent with the POST request
 * @param options Same as `opts` parameter of `useFetch`, `$fetch`, `method` and `body` options are omitted
 * @returns The async data result with types inferred from the request
 * @see https://nuxt.com/docs/4.x/api/composables/use-fetch
 */
export function useApiPost<
  ResT = void,
  ErrorT = Error,
  ReqT extends MethodToRoutesMap<'post'> = MethodToRoutesMap<'post'>,
  Method extends AvailableRouterMethod<ReqT> = AvailableRouterMethod<ReqT>,
  _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT,
  DataT = _ResT,
  PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
  DefaultT = null,
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  body?: Record<string, any>,
  options?: Omit<UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, AvailableRouterMethod<ReqT>>, 'method' | 'body'>,
): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | undefined> {
  return useApi<ResT, ErrorT, ReqT, Method, _ResT, DataT, PickKeys, DefaultT>(
    request,
    {
      ...options,
      // @ts-expect-error: Method is secured.
      method: 'post',
      body,
    },
  )
}

/**
 * `useApi` with `PUT` method.
 *
 * Auto-completes only routes that support PUT method.
 *
 * Use with caution for external routes as type inference won't work in that case.
 *
 * @experimental
 * @param request Same as `request` parameter of `useFetch`
 * @param body Request body to be sent with the PUT request
 * @param options Same as `opts` parameter of `useFetch`, `$fetch`, `method` and `body` options are omitted
 * @returns The async data result with types inferred from the request
 * @see https://nuxt.com/docs/4.x/api/composables/use-fetch
 */
export function useApiPut<
  ResT = void,
  ErrorT = Error,
  ReqT extends MethodToRoutesMap<'put'> = MethodToRoutesMap<'put'>,
  Method extends AvailableRouterMethod<ReqT> = AvailableRouterMethod<ReqT>,
  _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT,
  DataT = _ResT,
  PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
  DefaultT = null,
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  body?: Record<string, any>,
  options?: Omit<UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, AvailableRouterMethod<ReqT>>, 'method' | 'body'>,
): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | undefined> {
  return useApi<ResT, ErrorT, ReqT, Method, _ResT, DataT, PickKeys, DefaultT>(
    request,
    {
      ...options,
      // @ts-expect-error: Method is secured.
      method: 'put',
      body,
    },
  )
}

/**
 * `useApi` with `PATCH` method.
 *
 * Auto-completes only routes that support PATCH method.
 *
 * Use with caution for external routes as type inference won't work in that case.
 *
 * @experimental
 * @param request Same as `request` parameter of `useFetch`
 * @param body Request body to be sent with the PATCH request
 * @param options Same as `opts` parameter of `useFetch`, `$fetch`, `method` and `body` options are omitted
 * @returns The async data result with types inferred from the request
 * @see https://nuxt.com/docs/4.x/api/composables/use-fetch
 */
export function useApiPatch<
  ResT = void,
  ErrorT = Error,
  ReqT extends MethodToRoutesMap<'patch'> = MethodToRoutesMap<'patch'>,
  Method extends AvailableRouterMethod<ReqT> = AvailableRouterMethod<ReqT>,
  _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT,
  DataT = _ResT,
  PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
  DefaultT = null,
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  body?: Record<string, any>,
  options?: Omit<UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, AvailableRouterMethod<ReqT>>, 'method' | 'body'>,
): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | undefined> {
  return useApi<ResT, ErrorT, ReqT, Method, _ResT, DataT, PickKeys, DefaultT>(
    request,
    {
      ...options,
      // @ts-expect-error: Method is secured.
      method: 'patch',
      body,
    },
  )
}

/**
 * `useApi` with `DELETE` method.
 *
 * Auto-completes only routes that support DELETE method.
 *
 * Use with caution for external routes as type inference won't work in that case.
 *
 * @experimental
 * @param request Same as `request` parameter of `useFetch`
 * @param params Query parameters to be sent with the DELETE request
 * @param options Same as `opts` parameter of `useFetch`, `$fetch`, `method` and `params` options are omitted
 * @returns The async data result with types inferred from the request
 * @see https://nuxt.com/docs/4.x/api/composables/use-fetch
 */
export function useApiDelete<
  ResT = void,
  ErrorT = Error,
  ReqT extends MethodToRoutesMap<'delete'> = MethodToRoutesMap<'delete'>,
  Method extends AvailableRouterMethod<ReqT> = AvailableRouterMethod<ReqT>,
  _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT,
  DataT = _ResT,
  PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
  DefaultT = null,
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  params?: Record<string, any>,
  options?: Omit<UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, AvailableRouterMethod<ReqT>>, 'method' | 'params'>,
): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | undefined> {
  return useApi<ResT, ErrorT, ReqT, Method, _ResT, DataT, PickKeys, DefaultT>(
    request,
    {
      ...options,
      // @ts-expect-error: Method is secured.
      method: 'delete',
      params,
    },
  )
}
