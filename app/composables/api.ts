// FIXME(Lumirelle): It's safe to share the same instance of whole app?
let _fetch: ReturnType<typeof createUseFetch>

export function useApi() {
  if (!useApi) {
    _fetch = createUseFetch({
      $fetch: useNuxtApp().$api,
    })
  }
  return _fetch
}
