// FIXME(Lumirelle): [nuxt:compiler] `createUseFetch` is a compiler macro that is only usable inside the directories scanned by the Nuxt compiler as an exported function and imported statically. Learn more: `https://nuxt.com/docs/guide/going-further/compiler`
export const useApi = async (..._: any) => ({ data: undefined, error: undefined })/* createUseFetch(options => ({
  ...options,
  $fetch: useNuxtApp().$api,
}))
 */
