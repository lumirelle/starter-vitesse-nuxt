// oxlint-disable typescript/array-type
// oxlint-disable typescript/no-invalid-void-type
import type {
  AvailableRouterMethod as _AvailableRouterMethod,
  NitroFetchRequest,
} from 'nitropack/types'
import type { AsyncData, FetchResult, UseFetchOptions } from 'nuxt/app'
import type { FetchError } from 'ofetch'

//#region Type copy

/**
 * Extract keys of `T` whose values are all of type string.
 *
 * NOTE: This is a fork for `KeysOf` type from `asyncData.d.ts` as it's not exported there.
 */
type KeysOf<T> = Array<T extends T ? (keyof T extends string ? keyof T : never) : never>
/**
 * Pick properties `K` from `T`.
 *
 * NOTE: This is a fork for `PickFrom` type from `asyncData.d.ts` as it's not exported there.
 */
type PickFrom<T, K extends Array<string>> =
  T extends Array<any>
    ? T
    : T extends Record<string, any>
      ? keyof T extends K[number]
        ? T
        : K[number] extends never
          ? T
          : Pick<T, K[number]>
      : T
/**
 * Available router method for a given `NitroFetchRequest`.
 *
 * NOTE: This is a fork for `AvailableRouterMethod` type from `fetch.d.ts` as it's not exported there.
 */
type AvailableRouterMethod<R extends NitroFetchRequest> =
  | _AvailableRouterMethod<R>
  | Uppercase<_AvailableRouterMethod<R>>

//#endregion

/**
 * Use fetch with `$api` (the customized `ofetch` instance).
 *
 * TODO: Migrate to use factory functions after factory function support is added in Nuxt.
 *
 * @param request Same as `request` parameter of `useFetch`
 * @param options Same as `opts` parameter of `useFetch`, `$fetch` option is omitted
 * @returns The async data result with types inferred from the request
 * @see https://nuxt.com/docs/4.x/api/composables/use-fetch
 * @see https://github.com/nuxt/nuxt/issues/14736
 */
export function useApi<
  ResT = void,
  ErrorT = FetchError,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  Method extends AvailableRouterMethod<ReqT> = ResT extends void
    ? 'get' extends AvailableRouterMethod<ReqT>
      ? 'get'
      : AvailableRouterMethod<ReqT>
    : AvailableRouterMethod<ReqT>,
  _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT,
  DataT = _ResT,
  PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
  DefaultT = undefined,
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  options?: Omit<UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, Method>, '$fetch'>,
): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | undefined> {
  return useFetch<ResT, ErrorT, ReqT, Method, _ResT, DataT, PickKeys, DefaultT>(request, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}
