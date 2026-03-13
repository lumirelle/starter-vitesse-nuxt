export const useApi = createUseFetch({
  $fetch: useNuxtApp().$api,
})
