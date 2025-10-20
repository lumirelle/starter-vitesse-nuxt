import type { UseFetchOptions } from 'nuxt/app'

/**
 * Migrate to use factory functions after factory function support is added in Nuxt.
 *
 * @experimental
 * @see https://github.com/nuxt/nuxt/issues/14736
 */
export function useApi<T>(
  request: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  return useFetch(request, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}
